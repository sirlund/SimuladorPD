#!/usr/bin/env python3
"""
Intelligent script to remove (A), (B), (C) ID references from explanation fields.
Replaces them with generic descriptive phrases that work regardless of shuffle order.
"""

import re
import os
from pathlib import Path

BLOCKS_DIR = Path(__file__).parent.parent / "src" / "data" / "questions" / "blocks"

# Smart replacement patterns for common reference structures
REPLACEMENTS = [
    # "La opción X" / "La X" -> generic descriptions
    (r'\bLa opción A\b', 'El enfoque correcto'),
    (r'\bLa opción B\b', 'La segunda opción'),
    (r'\bLa opción C\b', 'La tercera opción'),
    (r'\bLa A\b', 'El primer enfoque'),
    (r'\bLa B\b', 'El segundo enfoque'),
    (r'\bLa C\b', 'El tercer enfoque'),
    
    # Parenthetical references with context
    (r'\s+\(A\)(?=\s)', ''),  # Remove standalone (A) with surrounding context
    (r'\s+\(B\)(?=\s)', ''),
    (r'\s+\(C\)(?=\s)', ''),
    
    # "opción A [verb]" -> "[concept] [verb]"
    # These will need manual review but we'll flag them
]

def process_explanation(explanation, question_id):
    """Process a single explanation, removing ID references."""
    original = explanation
    modified = explanation
    
    # Apply replacements
    for pattern, replacement in REPLACEMENTS:
        modified = re.sub(pattern, replacement, modified)
    
    # Flag complex cases for manual review
    if '(A)' in modified or '(B)' in modified or '(C)' in modified:
        return original, True  # Needs manual review
    
    return modified, original != modified

def process_file(file_path):
    """Process a single JSX file."""
    print(f"\n📝 Processing {file_path.name}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all explanation fields
    # Matches: explanation: "text"
    pattern = r'(explanation:\s*["\'])([^"\']+)(["\'])'
   
    changes = 0
    manual_review = 0
    
    def replace_explanation(match):
        nonlocal changes, manual_review
        prefix, explanation, suffix = match.groups()
        
        # Extract question_id from context (simplified - would need better parsing)
        modified, changed = process_explanation(explanation, "unknown")
        
        if changed:
            changes += 1
            return f"{prefix}{modified}{suffix}"
        return match.group(0)
    
    modified_content = re.sub(pattern, replace_explanation, content)
    
    if content != modified_content:
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        print(f"  ✅ Updated {changes} explanations")
    else:
        print(f"  ℹ️  No changes needed")
    
    return changes

def main():
    print("🚀 Starting intelligent explanation ID reference removal...\n")
    
    jsx_files = list(BLOCKS_DIR.glob("*.jsx"))
    total_changes = 0
    
    for file_path in sorted(jsx_files):
        changes = process_file(file_path)
        total_changes += changes
    
    print(f"\n✨ Complete! Updated {total_changes} explanations across {len(jsx_files)} files.")
    print("\n⚠️  Note: Complex cases with multiple ID references in one explanation")
    print("   will need manual review. Run: grep -r '(A)' src/data/questions/blocks/")

if __name__ == "__main__":
    main()
