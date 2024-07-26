# NodeJS

Esto es una guia para los alumnos de la capacitacion de Introduccion a NodeJS que cursan los dias _lunes, miercoles y viernes de 09hs a 12hs_, donde podran acceder a los ejemplos realizados en clase y a la recopilacion de dicho entorno de ejecucion de JS.

## Herramientas

* [Node JS: Entorno de Ejecucion de JS](https://nodejs.org/)
* [npm: Gestor de Paquetes](https://npmjs.com)
* [VS Code: Editor de Codigo](https://code.visualstudio.com)

## REPL

NodeJS nos ofrece una _pseudoconsola_ que puede ser ejecutada directamente, o desde alguna __CLI (Command Line Interface)__, donde podemos ejercutar intrucciones utilizando el bucle de JS, o abrir y ejecutar archivos de cualquier directorio. Esto es posible gracias a las caractericas conocidas como REPL.

* __Read__: Atiende a las lineas de codigo, instrucciones.
* __Eval__: Verifica y corrobora la sintaxis, ejecucion.
* __Print__: Muestra el resultado de la operacion, imprime.
* __Loop__: Una vez finalizado el ciclo, vuelve a empezar.

## Objetos Globales

### console

Objeto que ofrece métodos para imprimir información y errores en la consola estándar. Es bastante útil debido a que facilita la visualización de datos y la depuración de aplicaciones. 

| Metodo | Descripción |
|--|--|
| __log__	| Imprime mensajes en la consola estándar |
| __error__ | Imprime mensajes de error en la consola estándar |
| __warn__ | Imprime advertencias en la consola estándar |
| __info__ | Imprime información en la consola estándar |

## process

Interfaz para interactuar con el entorno del proceso de ejecución. Permite acceder a información y controlar el comportamiento del mismo; así como gestionar eventos y configuraciones relacionadas con el proceso.

| Propiedad | Tipo | Descripcion |
|--|--|--|
| __arch__ | _String_ | Propiedad que devuelve la arquitectura del sistema operativo actual |
| __argv__ | _Array_ | Propiedad que almacena los _argumentos_ pasados a la aplicacion que se esta ejecutando actualmente. |
| __cpuUsage__ | _Function_ | Metodo que devuelve un objeto que indica el consumo de memoria del procesador |
| __cwd__ | _Function_ | Metodo que devuelve un string con la ruta absoluta del directorio de trabajo actual |
| __env__ | _Object_ | Propiedad que contiene las _variables de entorno_ de la sistema operativo en el que se esta ejecutando. |
| __memoryUsage__ | _Function_ | Metodo de devuelve un objeto que detalla el uso de la memoria |
| __release__| _Object_ | Propiedad que contiene informacion relacionada con el version actual de NodeJS |
| __versions__ | _Object_ | Propiedad que almacena las versiones de los _modulos instalados_ y sus respectivas dependencias. | 

### timers

Mecanismos que permiten programar la ejecución de funciones después de un período de tiempo específico o en intervalos regulares. Estos se basan en el módulo de temporización del entorno de ejecución de Node.js, que a su vez utiliza las funciones del sistema operativo para gestionar los tiempos de espera.

| Metodo | Descripcion |
|--|--|
| __setImmediate__ | Programa la ejecución de una funcion al final de la cola de eventos |
| __setInterval__ | Ejecucion repetida de una funcion en intervalos de tiempo específicos |
| __setTimeout__ | Ejecuta una funcion después de un tiempo específico |
| __clearImmediate__ | Cancela una función programada con setImmediate() |
| __clearInterval__ | Cancela una función programada con setInterval() |
| __clearTimeout__ | Cancela una función programada con setTimeout() |

## Módulos Integrados

### os

Módulo que permite obtener información sobre el entorno del sistema, como la arquitectura de la CPU, la memoria disponible y el sistema de archivos. Esto es útil para la depuración, el monitoreo y la optimización del rendimiento de las aplicaciones.

| Método | Descripción |
|--|--|
| __arch__ | Devuelve la arquitectura de la CPU ('x64', 'arm', 'arm64', etc.) |
| __cpus__ | Devuelve una lista de objetos con información sobre cada CPU, incluyendo el modelo, velocidad y tiempos de uso |
| __freemem__ | Devuelve la cantidad de memoria libre en bytes |
| __totalmem__ | Devuelve la cantidad total de memoria del sistema en bytes |
| __hostname__ | Devuelve el nombre del host del sistema |
| __networkInterfaces__ | Devuelve un objeto con información sobre las interfaces de red del sistema, incluyendo direcciones IP, MAC y más |
| __platform__ | Devuelve una cadena que representa el sistema operativo ('darwin', 'freebsd', 'linux', 'sunos', 'win32') |
| __release__ | Devuelve la versión del sistema operativo |
| __tmpdir__ | Devuelve el directorio temporal del sistema |
| __uptime__ | Devuelve el tiempo de actividad del sistema en segundos desde el último inicio |
| __userInfo__ | Devuelve información sobre el usuario actual, como username, uid, gid, shell, y homedir |
| __endianness__ | Devuelve el orden de bytes del sistema ('BE' o 'LE') |

### url

Modulo que proporciona utilidades que facilitan el análisis, la resolución y la manipulación de las URLs en las aplicaciones. Este módulo es útil para aplicaciones web y servidores que necesitan construir, analizar o resolver URLs en sus procesos

| Método | Descripción |
|--|--|
| __parse__ | Devuelve un objeto con propiedades que representan los componentes de la URL |
| __format__ | Construye una URL a partir de un objeto (_protocol, host, pathname, search, hash, etc._) |
| __resolve__ | Convierte una URL relativa en una ruta absoluta |
| __URL__ | Clase para crear y manipular URLs con una interfaz orientada a objetos |
| __URLSearchParams__ | Clase para trabajar con los parámetros de búsqueda de la URL |

### path

proporciona utilidades para manejar y transformar rutas de archivos en el sistema de archivos. Simplifica la manipulación de nombres de archivo y directorios y ayuda a crear rutas compatibles con diferentes sistemas operativos.

| Propiedad | Descripción |
|--|--|
| __parse__ | Devuelve un objeto con las propiedades _root, dir, base, ext, y name_ |
| __resolve__ | Resuelve una secuencia de rutas en una ruta absoluta |
| __dirname__ | Devuelve el directorio de una ruta excluyendo el nombre del archivo |
| __basename__ | Devuelve el nombre del archivo en una ruta |
| __extname__ | Devuelve la extensión de archivo en una ruta, incluyendo el punto |
| __join__ | Une varios segmentos de ruta en una sola |
| __format__ | Devuelve una ruta a partir de un objeto con _dir, base, name y ext_ |

### fs (File System)

proporciona una API para interactuar con el sistema de archivos, permitiendo operaciones como leer, escribir y eliminar archivos.

| Propiedad | Descripción |
|--|--|
| __readFile__	| Lee el contenido de un archivo de manera asíncrona |
| __writeFile__	| Escribe datos en un archivo de manera asíncrona |
| __appendFile__ | Añade datos a un archivo de manera asíncrona |
| __unlink__	| Elimina un archivo |
