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

# 2️ Validar contenido de package.json
# -q  hace que grep no muestre ninguna salida por pantalla.Solo sirve para indicar si encontró (o no) la coincidencia.

grep -q '"type": *"module"' package.json || fail 'Falta "type": "module" en package.json'
grep -q '"dotenv"' package.json || fail "dotenv no está instalado en package.json"
grep -q '"json-server"' package.json || fail "json-server no está instalado en package.json"
grep -q '"server:up"' package.json || fail 'Falta script "server:up" en package.json'
grep -q '"crud:curl"' package.json || fail 'Falta script "crud:curl" en package.json'


# 3. Validar capturas en images/ (solo las que contienen 'TC' [thunder client] en el nombre)
CAPTURAS=$(find images/ -type f -iname "*TC*" | wc -l)
[ "$CAPTURAS" -ge 6 ] || fail "Se requieren al menos 6 capturas con 'TC' en el nombre (actualmente: $CAPTURAS)"


# 4️ Si todo pasó:
echo "--------------------------------------"
echo "✅ Validación completada con éxito. ¡Todo correcto!"
echo "--------------------------------------"
