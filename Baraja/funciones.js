/*
* Constituye los valores que representan las cartas de una baraja francesa
* El primer dígito del código constituye el palo de la carta siendo:
* 0 = picas, 1 = tréboles, 2 = corazones y 3 = diamantes.
* Esta hecho para que los valores menores a 200 sean las cartas negras y las que no las rojas.
*
* Los siguientes dos dígitos representan el número de la carta siendo los últimos valores 
* los que representan la J, la Q y la K en ese mismo orden.
*/

  const barajaFR=[
  { id: 'P01', nombre: 'As de Picas' },
  { id: 'P02', nombre: '2 de Picas' },
  { id: 'P03', nombre: '3 de Picas' },
  { id: 'P04', nombre: '4 de Picas' },
  { id: 'P05', nombre: '5 de Picas' },
  { id: 'P06', nombre: '6 de Picas' },
  { id: 'P07', nombre: '7 de Picas' },
  { id: 'P08', nombre: '8 de Picas' },
  { id: 'P09', nombre: '9 de Picas' },
  { id: 'P10', nombre: '10 de Picas' },
  { id: 'P11', nombre: 'Jota de Picas' },
  { id: 'P12', nombre: 'Reina de Picas' },
  { id: 'P13', nombre: 'Rey de Picas' },
  { id: 'T01', nombre: 'As de Tréboles' },
  { id: 'T02', nombre: '2 de Tréboles' },
  { id: 'T03', nombre: '3 de Tréboles' },
  { id: 'T04', nombre: '4 de Tréboles' },
  { id: 'T05', nombre: '5 de Tréboles' },
  { id: 'T06', nombre: '6 de Tréboles' },
  { id: 'T07', nombre: '7 de Tréboles' },
  { id: 'T08', nombre: '8 de Tréboles' },
  { id: 'T09', nombre: '9 de Tréboles' },
  { id: 'T10', nombre: '10 de Tréboles' },
  { id: 'T11', nombre: 'Jota de Tréboles' },
  { id: 'T12', nombre: 'Reina de Tréboles' },
  { id: 'T13', nombre: 'Rey de Tréboles' },
  { id: 'C01', nombre: 'As de Corazones' },
  { id: 'C02', nombre: '2 de Corazones' },
  { id: 'C03', nombre: '3 de Corazones' },
  { id: 'C04', nombre: '4 de Corazones' },
  { id: 'C05', nombre: '5 de Corazones' },
  { id: 'C06', nombre: '6 de Corazones' },
  { id: 'C07', nombre: '7 de Corazones' },
  { id: 'C08', nombre: '8 de Corazones' },
  { id: 'C09', nombre: '9 de Corazones' },
  { id: 'C10', nombre: '10 de Corazones' },
  { id: 'C11', nombre: 'Jota de Corazones' },
  { id: 'C12', nombre: 'Reina de Corazones' },
  { id: 'C13', nombre: 'Rey de Corazones' },
  { id: 'D01', nombre: 'As de Diamantes' },
  { id: 'D02', nombre: '2 de Diamantes' },
  { id: 'D03', nombre: '3 de Diamantes' },
  { id: 'D04', nombre: '4 de Diamantes' },
  { id: 'D05', nombre: '5 de Diamantes' },
  { id: 'D06', nombre: '6 de Diamantes' },
  { id: 'D07', nombre: '7 de Diamantes' },
  { id: 'D08', nombre: '8 de Diamantes' },
  { id: 'D09', nombre: '9 de Diamantes' },
  { id: 'D10', nombre: '10 de Diamantes' },
  { id: 'D11', nombre: 'Jota de Diamantes' },
  { id: 'D12', nombre: 'Reina de Diamantes' },
  { id: 'D13', nombre: 'Rey de Diamantes' }
  ];

  const barajaES=[
    { id: 'B01', nombre: 'As de Bastos' },
    { id: 'B02', nombre: '2 de Bastos' },
    { id: 'B03', nombre: '3 de Bastos' },
    { id: 'B04', nombre: '4 de Bastos' },
    { id: 'B05', nombre: '5 de Bastos' },
    { id: 'B06', nombre: '6 de Bastos' },
    { id: 'B07', nombre: '7 de Bastos' },
    { id: 'B08', nombre: '8 de Bastos' },
    { id: 'B09', nombre: '9 de Bastos' },
    { id: 'B10', nombre: 'Jota de Bastos' },
    { id: 'B11', nombre: 'Reina de Bastos' },
    { id: 'B12', nombre: 'Rey de Bastos' },
    { id: 'C01', nombre: 'As de Copas' },
    { id: 'C02', nombre: '2 de Copas' },
    { id: 'C03', nombre: '3 de Copas' },
    { id: 'C04', nombre: '4 de Copas' },
    { id: 'C05', nombre: '5 de Copas' },
    { id: 'C06', nombre: '6 de Copas' },
    { id: 'C07', nombre: '7 de Copas' },
    { id: 'C08', nombre: '8 de Copas' },
    { id: 'C09', nombre: '9 de Copas' },
    { id: 'C10', nombre: 'Jota de Copas' },
    { id: 'C11', nombre: 'Reina de Copas' },
    { id: 'C12', nombre: 'Rey de Copas' },
    { id: 'E01', nombre: 'As de Espadas' },
    { id: 'E02', nombre: '2 de Espadas' },
    { id: 'E03', nombre: '3 de Espadas' },
    { id: 'E04', nombre: '4 de Espadas' },
    { id: 'E05', nombre: '5 de Espadas' },
    { id: 'E06', nombre: '6 de Espadas' },
    { id: 'E07', nombre: '7 de Espadas' },
    { id: 'E08', nombre: '8 de Espadas' },
    { id: 'E09', nombre: '9 de Espadas' },
    { id: 'E10', nombre: 'Jota de Espadas' },
    { id: 'E11', nombre: 'Reina de Espadas' },
    { id: 'E12', nombre: 'Rey de Espadas' },
    { id: 'O01', nombre: 'As de Oros' },
    { id: 'O02', nombre: '2 de Oros' },
    { id: 'O03', nombre: '3 de Oros' },
    { id: 'O04', nombre: '4 de Oros' },
    { id: 'O05', nombre: '5 de Oros' },
    { id: 'O06', nombre: '6 de Oros' },
    { id: 'O07', nombre: '7 de Oros' },
    { id: 'O08', nombre: '8 de Oros' },
    { id: 'O09', nombre: '9 de Oros' },
    { id: 'O10', nombre: 'Jota de Oros' },
    { id: 'O11', nombre: 'Reina de Oros' },
    { id: 'O12', nombre: 'Rey de Oros' }
  ];

  const barajaESCorta=[
    { id: 'B01', nombre: 'As de Bastos' },
    { id: 'B02', nombre: '2 de Bastos' },
    { id: 'B03', nombre: '3 de Bastos' },
    { id: 'B04', nombre: '4 de Bastos' },
    { id: 'B05', nombre: '5 de Bastos' },
    { id: 'B06', nombre: '6 de Bastos' },
    { id: 'B07', nombre: '7 de Bastos' },
    { id: 'B10', nombre: 'Jota de Bastos' },
    { id: 'B11', nombre: 'Reina de Bastos' },
    { id: 'B12', nombre: 'Rey de Bastos' },
    { id: 'C01', nombre: 'As de Copas' },
    { id: 'C02', nombre: '2 de Copas' },
    { id: 'C03', nombre: '3 de Copas' },
    { id: 'C04', nombre: '4 de Copas' },
    { id: 'C05', nombre: '5 de Copas' },
    { id: 'C06', nombre: '6 de Copas' },
    { id: 'C07', nombre: '7 de Copas' },
    { id: 'C10', nombre: 'Jota de Copas' },
    { id: 'C11', nombre: 'Reina de Copas' },
    { id: 'C12', nombre: 'Rey de Copas' },
    { id: 'E01', nombre: 'As de Espadas' },
    { id: 'E02', nombre: '2 de Espadas' },
    { id: 'E03', nombre: '3 de Espadas' },
    { id: 'E04', nombre: '4 de Espadas' },
    { id: 'E05', nombre: '5 de Espadas' },
    { id: 'E06', nombre: '6 de Espadas' },
    { id: 'E07', nombre: '7 de Espadas' },
    { id: 'E10', nombre: 'Jota de Espadas' },
    { id: 'E11', nombre: 'Reina de Espadas' },
    { id: 'E12', nombre: 'Rey de Espadas' },
    { id: 'O01', nombre: 'As de Oros' },
    { id: 'O02', nombre: '2 de Oros' },
    { id: 'O03', nombre: '3 de Oros' },
    { id: 'O04', nombre: '4 de Oros' },
    { id: 'O05', nombre: '5 de Oros' },
    { id: 'O06', nombre: '6 de Oros' },
    { id: 'O07', nombre: '7 de Oros' },
    { id: 'O10', nombre: 'Jota de Oros' },
    { id: 'O11', nombre: 'Reina de Oros' },
    { id: 'O12', nombre: 'Rey de Oros' }
  ];

const FUNCIONES = {

  /*
  * Devuelve un JSON con la baraja francesa ordenada
  */
  fr: async (req, res) => {
    try{
        res.send(JSON.stringify(barajaFR));
    }catch (error){
        res.status(500).json({ error: error.description });
    }
  },

  /**
   * Devuelve un JSON con la baraja francesa barajada de manera aleatoria
   */
  frAleatorio: async (req, res) => {
      var barajaBarajada = barajaFR;
      barajaBarajada.sort(function(){return Math.random()-0.5});
      try{
        res.send(JSON.stringify(barajaBarajada));
      }catch (error){
        res.status(500).json({ error: error.description });
      }
  },

  /*
  * Devuelve un JSON con la baraja española ordenada
  */
  es: async (req, res) => {
    try{
        res.send(JSON.stringify(barajaES));
    }catch (error){
        res.status(500).json({ error: error.description });
    }
  },

  /**
   * Devuelve un JSON con la baraja española barajada de manera aleatoria
   */
  esAleatorio: async (req, res) => {
      var barajaBarajada = barajaES;
      barajaBarajada.sort(function(){return Math.random()-0.5});
      try{
        res.send(JSON.stringify(barajaBarajada));
      }catch (error){
        res.status(500).json({ error: error.description });
      }
  },

    /*
  * Devuelve un JSON con la baraja española sin 8 ni 9 ordenada
  */
    esCorta: async (req, res) => {
      try{
          res.send(JSON.stringify(barajaESCorta));
      }catch (error){
          res.status(500).json({ error: error.description });
      }
    },
  
    /**
     * Devuelve un JSON con la baraja española sin 8 ni 9 barajada de manera aleatoria
     */
    esCortaAleatorio: async (req, res) => {
        var barajaBarajada = barajaESCorta;
        barajaBarajada.sort(function(){return Math.random()-0.5});
        try{
          res.send(JSON.stringify(barajaBarajada));
        }catch (error){
          res.status(500).json({ error: error.description });
        }
    },
}

exports.funciones = {  ...FUNCIONES };