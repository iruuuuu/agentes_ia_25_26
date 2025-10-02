#!/bin/bash

URL="http://localhost:3000"

echo "=== CRUD AUTORES ==="

# CREATE autor
curl -X POST $URL/authors -H "Content-Type: application/json" -d '{"name":"Nuevo Autor","nationality":"Mexican","specialty":"Backend"}'
echo -e "\nAutor creado"

# READ autores
curl -X GET $URL/authors
echo -e "\nAutores obtenidos"

# UPDATE autor (id=1)
curl -X PUT $URL/authors/1 -H "Content-Type: application/json" -d '{"id":1,"name":"Robert C. Martin (Uncle Bob)","nationality":"American","specialty":"Agile, OOP"}'
echo -e "\nAutor actualizado"

# DELETE autor (id=2)
curl -X DELETE $URL/authors/2
echo -e "\nAutor eliminado"


echo "=== CRUD LIBROS ==="

# CREATE libro
curl -X POST $URL/books -H "Content-Type: application/json" -d '{"title":"Nuevo Libro","authorId":1,"year":2025,"language":"Python","topics":["AI","Machine Learning"]}'
echo -e "\nLibro creado"

# READ libros
curl -X GET $URL/books
echo -e "\nLibros obtenidos"

# UPDATE libro (id=1)
curl -X PUT $URL/books/1 -H "Content-Type: application/json" -d '{"id":1,"title":"Clean Code (Edición Revisada)","authorId":1,"year":2008,"language":"Java","topics":["Software Quality","Best Practices","Refactoring"]}'
echo -e "\nLibro actualizado"

# DELETE libro (id=2)
curl -X DELETE $URL/books/2
echo -e "\nLibro eliminado"
