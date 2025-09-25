#!/bin/bash
# @autor: Irene Ming Jimenenez Hinojosa
# @comment:
# @description : crear un script  utilizando el comando -v que verifique si tengo instalado o no los paquetes git , node , npm , curl   npm  si dicho de algunos de los paqutes no estan en el sistema mostraremos sistema de errores

echo "Verificando los requisitos previstos"




if command -v node > /dev/null 2>&1 
	NODE_VERSION=$(node --version)
	echo "node instalado; version: ¬$NODE_VERSION"
else
echo"no tienes instalado NodeJS
exit 1
fi

if command -v git; then
	GIT_VERSION=$(git --version)
	echo "instalado correctamente, version:$GIT_VERSION
else
	echo "No tienes instalado git"
	exit 1
fi

if command -v; then

