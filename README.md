# TFG

Existen tres tipos de microservicios en este proyecto:

Microservicios con lógica de negocio: se limitan a procesar los datos de entrada que les proporcionan los microservicios que gestionan las interfaces de usuario y les devuelven la información a estos mismos microservicios. Se limitan a implementarse cómo simples API REST pero sin almacenar ninguna información ellos mismos.

Microservicios con Interfaces de Usuario: se limitan a contener las interfaces para las distintas funcionalidades del proyecto y no procesan ningún tipo de información, sólo almacenan la información de la sesión y la envían en cada acción del usuario a los microservicios con lógica de negocio.

Microservicios de permanencia de datos: estos microservicios se encargan de guardar y enviar datos a los microservicios que lo necesiten, evitando cualquier tipo de lógica de negocio en ellos (este tipo de microservicios se comunicarán con las bases de datos, en la actualidad del proyecto el único microservicio del este estilo sería Baraja, pero no se comunica con ninguna base de datos debido a la simplicidad de los datos  que tiene además de su carácter estático).

## Archivos comunes a todos los microservicios

servidor.js: archivo donde se inicializa y pone en marcha el servidor con su configuración.

rutas.js: archivo donde se almacenan todas las rutas de la API que permite el microservicio.

funciones.js: archivo donde se describen todas las funciones llamadas a través de las distintas rutas de la API del microservicio.
