#!/usr/bin/env python3
"""
Second pass: Remove remaining parenthetical ID references like (A), (B), (C)
These typically appear mid-sentence describing specific approaches.
"""

import re
from pathlib import Path

BLOCKS_DIR = Path(__file__).parent.parent / "src" / "data" / "questions" / "blocks"

# Context-aware replacements for parenthetical references
def smart_replace_parenthetical(text):
    """
    Replace remaining (A), (B), (C) references with context-aware descriptions.
    """
    
    # Pattern: "concept (A)" -> "concept"
    # Remove trailing reference after a description
    text = re.sub(r'([a-záéíóúñ]+)\s+\(([ABC])\)', r'\1', text)
    
    # Pattern: "Un Lead ... (A)" -> "Un Lead ..."
    text = re.sub(r'\s+\(A\)(?=[\s\.,]|$)', '', text)
    text = re.sub(r'\s+\(B\)(?=[\s\.,]|$)', '', text)
    text = re.sub(r'\s+\(C\)(?=[\s\.,]|$)', '', text)
    
    # Pattern: "(A) verb" -> "El primer enfoque verb"
    text = re.sub(r'\(A\)\s+([a-z])', r'El primer enfoque \1', text)
    text = re.sub(r'\(B\)\s+([a-z])', r'El segundo enfoque \1', text)  
    text = re.sub(r'\(C\)\s+([a-z])', r'El tercer enfoque \1', text)
    
    return text

def process_file(file_path):
    """Process explanations in a JSX file."""
    print(f"\n📝 Processing {file_path.name}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find explanation fields
    pattern = r'(explanation:\s*["\'])([^"\']+)(["\'])'
    
    changes = 0
    
    def replace_explanation(match):
        nonlocal changes
        prefix, explanation, suffix = match.groups()
        
        # Check if contains parenthetical references
        if re.search(r'\([ABC]\)', explanation):
            modified = smart_replace_parenthetical(explanation)
            if modified != explanation:
                changes += 1
                return f"{prefix}{modified}{suffix}"
        
        return match.group(0)
    
    modified_content = re.sub(pattern, replace_explanation, content)
    
    if content != modified_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        print(f"  ✅ Cleaned {changes} remaining references")
    else:
        print(f"  ✓ Already clean")
    
    return changes

def main():
    print("🔧 Second pass: Removing remaining parenthetical ID references...\n")
    
    jsx_files = list(BLOCKS_DIR.glob("*.jsx"))
    total_changes = 0
    
    for file_path in sorted(jsx_files):
        changes = process_file(file_path)
        total_changes += changes
    
    print(f"\n✨ Second pass complete! Cleaned {total_changes} additional references.")
    
    # Check remaining
    print("\n🔍 Checking for any remaining references...")
    import subprocess
    result = subprocess.run(
        ['grep', '-rn', '(A)', 'src/data/questions/blocks/'],
        capture_output=True,
        text=True,
        cwd=BLOCKS_DIR.parent.parent.parent
    )
    
    remaining = len(result.stdout.strip().split('\n')) if result.stdout.strip() else 0
    print(f"   Found {remaining} remaining cases (may need manual review)")

if __name__ == "__main__":
    main()
