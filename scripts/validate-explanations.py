#!/usr/bin/env python3
"""
Validador de explicaciones - Encuentra y reporta problemas de sintaxis
en archivos de preguntas antes de que causen errores de compilación.

Uso:
    python3 scripts/validate-explanations.py
    python3 scripts/validate-explanations.py src/data/questions/blocks/01-strategy.jsx
"""

import sys
from pathlib import Path
import re

def validate_explanation_quotes(line, line_num):
    """Valida que las comillas en explanations estén correctamente escapadas"""
    if 'explanation:' not in line:
        return None
    
    # Contar comillas dobles no escapadas
    quote_count = 0
    escaped = False
    
    for char in line:
        if char == '\\':
            escaped = True
            continue
        if char == '"' and not escaped:
            quote_count += 1
        escaped = False
    
    # Debe haber exactamente 2 comillas (apertura y cierre del string)
    if quote_count > 2:
        return {
            'line': line_num,
            'type': 'unescaped_quotes',
            'message': f'Encontradas {quote_count} comillas dobles. Usa comillas simples (\') para texto interno.',
            'severity': 'error'
        }
    
    return None

def validate_object_structure(lines, file_path):
    """Valida la estructura básica de objetos de pregunta"""
    issues = []
    
    # Verificar que cada pregunta tenga los campos requeridos
    required_fields = ['id:', 'category:', 'scenario:', 'question:', 'options:', 'explanation:']
    
    in_question = False
    current_question_line = 0
    found_fields = set()
    
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        
        # Detectar inicio de pregunta
        if re.match(r'^\{\s*$', stripped) or re.match(r'^\{\s*id:', stripped):
            in_question = True
            current_question_line = i
            found_fields = set()
        
        # Detectar fin de pregunta
        if in_question and stripped == '},':
            # Verificar campos requeridos
            missing = [f for f in required_fields if f not in found_fields]
            if missing:
                issues.append({
                    'line': current_question_line,
                    'type': 'missing_fields',
                    'message': f'Faltan campos requeridos: {", ".join(missing)}',
                    'severity': 'warning'
                })
            in_question = False
        
        # Registrar campos encontrados
        if in_question:
            for field in required_fields:
                if field in stripped:
                    found_fields.add(field)
    
    return issues

def validate_file(file_path):
    """Valida un archivo completo de preguntas"""
    print(f"\n📝 Validando {file_path.name}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    issues = []
    
    # Validar comillas en explanations
    for i, line in enumerate(lines, 1):
        quote_issue = validate_explanation_quotes(line, i)
        if quote_issue:
            issues.append(quote_issue)
    
    # Validar estructura de objetos
    structure_issues = validate_object_structure(lines, file_path)
    issues.extend(structure_issues)
    
    # Reportar resultados
    if not issues:
        print(f"  ✅ Sin problemas detectados")
        return True
    
    errors = [i for i in issues if i['severity'] == 'error']
    warnings = [i for i in issues if i['severity'] == 'warning']
    
    if errors:
        print(f"  ❌ {len(errors)} errores encontrados:")
        for issue in errors:
            print(f"     Línea {issue['line']}: {issue['message']}")
    
    if warnings:
        print(f"  ⚠️  {len(warnings)} advertencias:")
        for issue in warnings:
            print(f"     Línea {issue['line']}: {issue['message']}")
    
    return len(errors) == 0

def main():
    if len(sys.argv) > 1:
        # Validar archivo específico
        file_path = Path(sys.argv[1])
        if not file_path.exists():
            print(f"❌ Archivo no encontrado: {file_path}")
            sys.exit(1)
        
        success = validate_file(file_path)
        sys.exit(0 if success else 1)
    
    # Validar todos los archivos de bloques
    blocks_dir = Path(__file__).parent.parent / "src" / "data" / "questions" / "blocks"
    
    if not blocks_dir.exists():
        print(f"❌ Directorio no encontrado: {blocks_dir}")
        sys.exit(1)
    
    print("🔍 Validando todos los archivos de preguntas...\n")
    
    all_valid = True
    for jsx_file in sorted(blocks_dir.glob("*.jsx")):
        if not validate_file(jsx_file):
            all_valid = False
    
    print("\n" + "="*60)
    if all_valid:
        print("✅ Todos los archivos están correctos!")
        sys.exit(0)
    else:
        print("❌ Se encontraron problemas. Revisa los errores arriba.")
        sys.exit(1)

if __name__ == "__main__":
    main()
