# ProgramacionFuncional

Vamos a aplicar nuestros conocimientos adquiridos de Javascript y  de Node.Js para programar un DAO.

Getting Started

La empresa de abarrotes doña Julia tiene una lista de productos donde almacena la clave del producto, su descripción precio, clasificación, cantidad de existencia, existencia mínima y máxima. Doña Julia requiere generar varios reportes:

1) Número de productos con existencia mayor a 20.
2) Número de productos con existencia menos a 15.
3) Lista de productos con la misma clasificación y precio mayor 15.50
4) Lista de productos con precio mayor a 20.30 y menor a 45.00
5) Número de productos agrupados por su clasificación

Cree un DAO para cargar la información de un archivo con 80 productos como mínimo.

Prerequisites

Se necesita contar con el enviroment de node js y javascript para correr este programa
Este programa hace uso de las librerias FS y PROMPT-SYNC

Installing

Puedes clonar el repositorio en el apartado especifico de code o puedes descargar archivo por archivo en raw, los archivos principales son dao.js e input.js, tambien esta el archivo datos, el cual contiene la informacion de la base de datos de los abarrotes, los demas archivos son archivos de necesarios para correr los modulos usados en los archivos principales, pero estos se pueden generar en tu repositorio local de forma manual.

Una vez que cuentes con el repositorio clonado o con los archivos en una carpeta especifica de tu preferencia, tiene que correr los archivos a traves de node de la siguiente forma:

Para agregar datos a la base de datos:

      node input.js

Para correr el menu del DAO:

      node dao.js
      
Built With

    nodejs
    javascript

Contributing

      sad

Jose Eduardo Conde Hernandez 299506 
6cc2
Desarrollo basado en plataformas 

Acknowledgments

    Docente Luis Antonio Ramirez Martinez

