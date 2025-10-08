#!/bin/bash

echo "🔍 Iniciando validación del proyecto..."

# Función para mostrar errores
fail() {
    echo "❌ $1"
    exit 1
}

# 1. Validar existencia de archivos y carpetas
# -f archivo comprueba si el archivo existe y es un archivo regular (no una carpeta, enlace, etc.)

[ -f package.json ] || fail "Falta package.json"
[ -f src/db/db.json ] || fail "Falta src/db/db.json"
[ -f .gitignore ] || fail "Falta .gitignore"
[ -f .env.example ] || fail "Falta .env.example"
[ -f README.md ] || fail "Falta README.md"
[ -f checklist.md ] || fail "Falta checklist.md"
[ -f peticiones-crud.http ] || fail "Falta peticiones-crud.http"
[ -f src/crud-curl.js ] || fail "Falta src/crud-curl.js"
[ -d src ] || fail "Falta carpeta src/"
[ -d images ] || fail "Falta carpeta images/"
[ -d scripts ] || fail "Falta carpeta scripts/"



# 3. Validar capturas en images/
CAPTURAS=$(find images/ -type f -name "*.png" | wc -l)
[ "$CAPTURAS" -ge 6 ] || fail "Se requieren al menos 6 capturas en images/"