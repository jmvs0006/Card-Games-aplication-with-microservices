//Esta ruta se ha de modificar para coincidir con la ruta en la que se desplegue el microservicio baraja en ese momento
const RUTA_MS_BARAJA = "http://localhost:8001/aleatorio/es/corta";
const PUNTUACION_MAX = 7.5;

/*
* Función para puntuar las mano de un jugador
*/
function puntuar(mano) {
  let puntuacion = 0;
  for (let i = 0; i < mano.length; i++) {
    let val = eval(mano[i].id.slice(1));
    if(val>7){
      val = 0.5;
    }
    puntuacion = puntuacion + val;
  }
  return puntuacion;
}

/*
* Función auxiliar para convertir un Json en array
*/
function JsonToArray(mensaje){
  let array = [];
  for(var i in mensaje)
        array.push(mensaje[i]);
  return array;
}

const FUNCIONES = {

    /*
    * Devuelve la baraja y las manos tanto del jugador com de la banca listas para empezar el juego
    */
    inicializar: async (req, res) => {

      //Se consigue la baraja inicial a través del microservicio Baraja
      let aux;
      try{
      aux = await fetch(RUTA_MS_BARAJA).then(response=>response.json());
      }catch (error){
          res.status(500).json({ error: error.description });
      }

      //Inicialización de variables
      let baraja = [];
      let mano_jugador = [];
      let mano_banca = [];
      let puntuacion_jugador = 0;
      let puntuacion_banca = 0;
      let ganador = 0;
      baraja = JsonToArray(aux);

      //Inicialización de la partida
      mano_jugador.push(baraja.shift());
      mano_banca.push(baraja.shift());

      puntuacion_jugador = puntuar(mano_jugador);
      puntuacion_banca = puntuar(mano_banca);

      //Envío de la información de la partida
      var partida = {
        baraja,
        mano_jugador,
        mano_banca,
        puntuacion_jugador,
        puntuacion_banca,
        ganador
      };
      res.send(JSON.stringify(partida));
    },
  
    /**
     * Dado un estado de la partida realiza la acción de que el jugador robe una carta
     */
    robar: async (req, res) => {

        //Inicialización de variables
        let baraja = req.body.baraja;
        let mano_jugador = req.body.mano_jugador;
        let mano_banca = req.body.mano_banca;
        let puntuacion_jugador = 0;
        let puntuacion_banca = 0;
        let ganador = 0;
        
        //Robo de carta y evaluación de las manos de los jugadores
        mano_jugador.push(baraja.shift());
        puntuacion_jugador = puntuar(mano_jugador);
        puntuacion_banca = puntuar(mano_banca);

        if(puntuacion_jugador>PUNTUACION_MAX) ganador = 2;

        //Envío de la información de la partida
        var partida = {
            baraja,
            mano_jugador,
            mano_banca,
            puntuacion_jugador,
            puntuacion_banca,
            ganador
          };
          res.send(JSON.stringify(partida));
    },

    /**
     * Dado un estado de la partida realiza la acción de que el jugador pase
     */
    pasar: async (req, res) => {

        //Inicialización de variables
        let baraja = req.body.baraja;
        let mano_jugador = req.body.mano_jugador;
        let mano_banca = req.body.mano_banca;
        let puntuacion_jugador = 0;
        let puntuacion_banca = 0;
        let ganador = 0;

        //Evaluación de las manos de los jugadores
        puntuacion_jugador = puntuar(mano_jugador);
        puntuacion_banca = puntuar(mano_banca);

        //Se comprueba el ganador de la partida
        if (puntuacion_banca>puntuacion_jugador) {
            ganador = 2;
        }else{
          while (puntuacion_banca<PUNTUACION_MAX && puntuacion_banca < puntuacion_jugador) {
            mano_banca.push(baraja.shift());
            puntuacion_banca = puntuar(mano_banca);
          }
          if (puntuacion_banca>PUNTUACION_MAX) {
            ganador = 1;
          }else{
            ganador = 2;
            if(puntuacion_banca===puntuacion_jugador) ganador = 3;
            if (puntuacion_banca>puntuacion_jugador) ganador = 2;
            if (puntuacion_banca<puntuacion_jugador) ganador = 1;
          
          }
        }

        //Envío de la información de la partida
        let partida = {
            baraja,
            mano_jugador,
            mano_banca,
            puntuacion_jugador,
            puntuacion_banca,
            ganador
          };
          res.send(JSON.stringify(partida));
    },
  }
  
  exports.funciones = {  ...FUNCIONES };