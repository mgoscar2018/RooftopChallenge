# RooftopChallenge
Repositorio para almacenar el Challenge "Career Switch" de Rooftop Academy.

## Descripción
Se tienen los siguientes programas:
* oscar.js
* challenge.js

**challenge.js** contiene los métodos que permiten conectarse con los endpoint del challenge, cada uno de estos métodos realizan las siguientes funciones:

**obtenerToken(email).-** Obtiene un token único, con base al email enviado como parámetro.

**obtenerBloques(token).-** Regresa un arreglo con bloques desordenados, recibe cómo parámetro el token obtenido del método **obtenerToken**.

**revisarConsecutivos(bloque1,bloque2,token).-** Metodo que permite confirmar si dos bloques son consecutivos, recibe como parámetro el token y los dos bloques a verificar.

**check (blocks, token).-** Devuelve un arreglo de bloques ordenados, recibe cómo parámetro los bloques desordenados y el token.

**finalCheck(cadenaOrdenada,token).-** Verifica si la cadena enviada como parámetro se encuentra ordenada correctamente.

### Ejecutar el proyecto por primera vez
En consola, desde el directorio raíz del proyecto escribir los siguientes comandos:
```
npm install
npm start
```
### Ejecutar proyecto
En consola, ejecutar:
```npm start```

Este correrá el programa **oscar.js**, el cual obtendrá el token para mí correo "mgoscar@gmail.com", obtendrá y ordenará los bloques y al final comprobará que el orden sea correcto. Todo el proceso paso a paso es mostrado en consola.

### Ejecutar pruebas 
En consoloa ejecutar:
```npm test```

Se abrirá Jest ejecutando un caso de prueba para la obtención del Token a través de MOCKS de acuerdo a lo establecido en el archivo **challenge.test.js**