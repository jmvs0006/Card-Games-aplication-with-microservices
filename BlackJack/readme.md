# Microservico BlackJack

Este microservicio siempre devuelve un objeto partida que consta de un objeto baraja (vector de cartas), un vector dde cartas que representa la mano del jugador, un vector de cartas que representa la mano de la banca, la puntuación del jugador, la puntuación de la banca y el ganador de la partida (si hay en ese momento).


## Endpoints
### /
Inicializa una partida, creando las dos manos y evaluandolas para tener las puntuaciones inicales del jugdaor y la banca.
### /robar
A partir de un objeto partida necesario como entrada, añade una carta a la mano del jugador y comprueba si hay ganador de la partida. Luego devuelve el objeto partida en su nuevo estado.
### /pasar
A partir de un objeto partida necesario como entrada, añade una carta a la mano de la banca hasta que esta gane al jugador o pierda. Luego devuelve el objeto partida en su nuevo estado.
