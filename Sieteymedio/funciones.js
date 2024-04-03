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
      let aux;
      try{
      aux = await fetch(RUTA_MS_BARAJA).then(response=>response.json());
      }catch (error){
          res.status(500).json({ error: error.description });
      }
      let baraja = [];
      let mano_jugador = [];
      let mano_banca = [];
      let puntuacion_jugador = 0;
      let puntuacion_banca = 0;
      let ganador = 0;
      baraja = JsonToArray(aux);

      mano_jugador.push(baraja.shift());
      mano_jugador.push(baraja.shift());
      mano_banca.push(baraja.shift());

      puntuacion_jugador = puntuar(mano_jugador);
      puntuacion_banca = puntuar(mano_banca);

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
        try{
          
        }catch (error){
          res.status(500).json({ error: error.description });
        }
        let baraja = req.body.baraja;
        let mano_jugador = req.body.mano_jugador;
        let mano_banca = req.body.mano_banca;
        let puntuacion_jugador = 0;
        let puntuacion_banca = 0;
        let ganador = 0;
        
        mano_jugador.push(baraja.shift());
        puntuacion_jugador = puntuar(mano_jugador);
        puntuacion_banca = puntuar(mano_banca);

        if(puntuacion_jugador>PUNTUACION_MAX) ganador = 2;

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
        let baraja = req.body.baraja;
        let mano_jugador = req.body.mano_jugador;
        let mano_banca = req.body.mano_banca;
        let puntuacion_jugador = 0;
        let puntuacion_banca = 0;
        let ganador = 0;

        puntuacion_jugador = puntuar(mano_jugador);
        puntuacion_banca = puntuar(mano_banca);

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