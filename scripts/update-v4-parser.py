#!/usr/bin/env python3
"""
Script V4 - Usando parsing inteligente de strings en JavaScript
Maneja correctamente comillas simples dentro de strings con comillas dobles
"""

import re
from pathlib import Path

def load_explanations():
    """Cargar explicaciones del archivo"""
    file = Path(__file__).parent / "explan-v4-input.txt"
    with open(file, 'r', encoding='utf-8') as f:
        text = f.read()
    
    pattern = r'ID:\s*(\S+)\s*\nExplicación:\s*\n(.*?)(?=\n\nID:|$)'
    matches = re.findall(pattern, text, re.DOTALL)
    
    return {qid.strip(): exp.strip() for qid, exp in matches}

def find_string_end(content, start_pos):
    """
    Encuentra el final de un string que empieza en start_pos
    Maneja comillas simples dentro de comillas dobles
    """
    quote_char = content[start_pos]
    pos = start_pos + 1
    
    while pos < len(content):
        char = content[pos]
        
        # Si encontramos la comilla de cierre
        if char == quote_char:
            # Verificar que no esté escapada
            if content[pos-1] != '\\':
                return pos
        
        pos += 1
    
    return -1

def update_file_with_parser(file_path, explan_map):
    """
    Actualizar archivo usando parsing manual de strings
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updates = 0
    result = []
    pos = 0
    current_id = None
    
    # Buscar cada ocurrencia de 'id:' y 'explanation:'
    while pos < len(content):
        # Buscar 'id: "'
        id_match = re.search(r'id:\s*["\']([^"\']+)["\']', content[pos:])
        if id_match:
            # Guardar el ID actual
            current_id = id_match.group(1)
            # Avanzar hasta después del match
            match_end = pos + id_match.end()
            result.append(content[pos:match_end])
            pos = match_end
            
            # Ahora buscar 'explanation:' en el mismo objeto
            expl_match = re.search(r'explanation:\s*"', content[pos:])
            if expl_match and current_id in explan_map:
                # Encontrar donde empieza el string de explanation
                expl_start = pos + expl_match.end()
                
                # Encontrar donde termina el string
                expl_end = find_string_end(content, expl_start - 1)
                
                if expl_end > 0:
                    # Agregar todo hasta el inicio del string
                    result.append(content[pos:expl_start])
                    
                    # Agregar la nueva explicación
                    new_exp = explan_map[current_id]
                    result.append(new_exp)
                    
                    # Saltar el contenido viejo
                    pos = expl_end
                    
                    updates += 1
                    print(f"      ✓ {current_id}")
                    current_id = None
                    continue
        
        # Si no encontramos match, agregar el resto
        if not id_match:
            result.append(content[pos:])
            break
        
        pos += 1
    
    modified_content = ''.join(result)
    
    if content != modified_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
    
    return updates

def main():
    blocks_dir = Path(__file__).parent.parent / "src" / "data" / "questions" / "blocks"
    
    print("🔄 Cargando explicaciones V4...")
    explanations = load_explanations()
    print(f"✅ Cargadas {len(explanations)} explicaciones\n")
    
    total = 0
    for jsx_file in sorted(blocks_dir.glob("*.jsx")):
        print(f"\n📝 {jsx_file.name}")
        count = update_file_with_parser(jsx_file, explanations)
        
        if count > 0:
            print(f"   ✅ {count} actualizadas")
            total += count
        else:
            print(f"   ℹ️  Sin cambios")
    
    print(f"\n✨ Completado! {total} explicaciones actualizadas a V4")

if __name__ == "__main__":
    main()
