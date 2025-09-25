#!/bin/bash

# @autor:Irene Ming Jimenez Hinojosa @comment: - @description: Script 
# @comment: - 
# @description:sript

clear 
echo "Verificando los requisitos prevevios"

if commando -v node; then
	NODE_VERSION=$(node --version)
	echo "Node instalado correctamente; version: $NODE_VERSION"
else
	echo "Notienes instalado NodeJS"
	exit 1
fi

if command  -v git; then
	GIT_VERSION=~(git --version)
	echo "Instalado correctamente Git; version: $GIT_VERSION"
else 
	echo "No tienes instalado git"
	exit 1
fi

if commando -v npm; then
        NPM_VERSION=~(git --version)
        echo "Instalado correctamente npm; version; $NPM_VERSION"
else
        echo "No tienes instalado NPM"
	exit 1
fi

if command -v curl; then
	CURL_VERSION=$(curl --version)
	echo "Instalado correctamente curl; version: $CURL_VERSION"
else
	echo "No tienes instalado CURL"
	exit 1
fi
{}
