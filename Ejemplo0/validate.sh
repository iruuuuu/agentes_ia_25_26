#!/bin/bash
# @autor: Isaías FL
# @comment:
# @description:  Script que valida si tenemos instalados: git, node, npm, curl

clear
echo "Verificando los quisitos previos"

if command -v node >/dev/null 2>&1; then
  NODE_VERSION=$(node --version)
  echo "😁 Node instalado correctamente; versión: $NODE_VERSION"
else
  echo -e "💩 No tienes instalado NodeJS\n"
  exit 1
fi

if command -v git >/dev/null 2>&1; then
  GIT_VERSION=$(git --version)
  echo "😁  instalado correctamente; versión: $GIT_VERSION"
else
  echo "💩 No tienes instalado git"
  exit 1
fi

if command -v npm >/dev/null 2>&1; then
  NPM_VERSION=$(npm --version)
  echo "😁  instalado correctamente npm; versión: $NPM_VERSION"
else
  echo "💩 No tienes instalado NPM"
  exit 1
fi

if command -v curl >/dev/null 2>&1; then
  CURL_VERSION=$(curl --version)
  echo "😁  instalado correctamente npm; "
else
  echo "💩 No tienes instalado CURL"
  exit 1
fi

echo "🎉 Todos los paquetes instalados correctamente"
