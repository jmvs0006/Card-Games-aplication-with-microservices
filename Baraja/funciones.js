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
}

exports.funciones = {  ...FUNCIONES };