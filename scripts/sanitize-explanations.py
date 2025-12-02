#!/usr/bin/env python3
"""
Sanitizador de explicaciones - Corrige automáticamente problemas comunes
en strings de explanation antes de agregarlos a los archivos.

Uso:
    # Sanitizar un archivo específico
    python3 scripts/sanitize-explanations.py src/data/questions/blocks/01-strategy.jsx
    
    # Sanitizar todos los archivos
    python3 scripts/sanitize-explanations.py --all
    
    # Preview sin aplicar cambios
    python3 scripts/sanitize-explanations.py --dry-run src/data/questions/blocks/01-strategy.jsx
"""

import sys
import argparse
from pathlib import Path

def sanitize_explanation_line(line):
    """Sanitiza una línea de explanation, corrigiendo comillas"""
    if 'explanation:' not in line:
        return line, False
    
    # Split en explanation:
    parts = line.split('explanation:', 1)
    if len(parts) != 2:
        return line, False
    
    prefix = parts[0] + 'explanation:'
    rest = parts[1].strip()
    
    # Debe empezar con "
    if not rest.startswith('"'):
        return line, False
    
    # Quitar la primera "
    rest = rest[1:]
    
    # Encontrar la última "
    if not rest.endswith('"'):
        return line, False
    
    # Quitar la última "
    content = rest[:-1]
    
    # Reemplazar todas las comillas dobles internas con simples
    fixed_content = content.replace('"', "'")
    
    # Reconstruir
    return f'{prefix} "{fixed_content}"\n', content != fixed_content

def sanitize_file(file_path, dry_run=False):
    """Sanitiza un archivo completo"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    modified_lines = []
    changes_made = False
    line_changes = []
    
    for i, line in enumerate(lines, 1):
        new_line, changed = sanitize_explanation_line(line)
        modified_lines.append(new_line)
        
        if changed:
            changes_made = True
            line_changes.append(i)
    
    if not changes_made:
        return False, []
    
    if not dry_run:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(modified_lines)
    
    return True, line_changes

def main():
    parser = argparse.ArgumentParser(
        description='Sanitiza explanations en archivos de preguntas'
    )
    parser.add_argument(
        'files',
        nargs='*',
        help='Archivos a sanitizar (opcional si se usa --all)'
    )
    parser.add_argument(
        '--all',
        action='store_true',
        help='Sanitizar todos los archivos de bloques'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Mostrar cambios sin aplicarlos'
    )
    
    args = parser.parse_args()
    
    files_to_process = []
    
    if args.all:
        blocks_dir = Path(__file__).parent.parent / "src" / "data" / "questions" / "blocks"
        files_to_process = list(blocks_dir.glob("*.jsx"))
    elif args.files:
        files_to_process = [Path(f) for f in args.files]
    else:
        parser.print_help()
        sys.exit(1)
    
    if args.dry_run:
        print("🔍 Modo DRY RUN - No se aplicarán cambios\n")
    
    total_modified = 0
    
    for file_path in sorted(files_to_process):
        if not file_path.exists():
            print(f"❌ Archivo no encontrado: {file_path}")
            continue
        
        modified, lines_changed = sanitize_file(file_path, args.dry_run)
        
        if modified:
            total_modified += 1
            action = "Se modificarían" if args.dry_run else "Modificadas"
            print(f"✅ {file_path.name}")
            print(f"   {action} {len(lines_changed)} líneas: {lines_changed}")
        else:
            print(f"ℹ️  {file_path.name} - Sin cambios necesarios")
    
    print(f"\n{'Resumen' if args.dry_run else 'Completado'}:")
    print(f"  Archivos procesados: {len(files_to_process)}")
    print(f"  Archivos {'que se modificarían' if args.dry_run else 'modificados'}: {total_modified}")
    
    if args.dry_run and total_modified > 0:
        print("\n💡 Ejecuta sin --dry-run para aplicar los cambios")

if __name__ == "__main__":
    main()
