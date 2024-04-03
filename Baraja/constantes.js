const barajaFR_TEXTO=[
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
const CARTAS_POR_PALO_FR = 13;
const NUM_PALOS = 4;
function crearBarajaFR() {
    let res = [];
    let carta = new Object();
    let palos = ["Picas","Tréboles","Corazones","Diamantes"]
    for (let j = 0; j < NUM_PALOS; j++) {
        for (let i = 0; i < CARTAS_POR_PALO_FR; i++) {
            let carta = new Object();
            carta.id=palos[j][0]+(i+1);
            if(i+1<10) carta.id=palos[j][0]+"0"+(i+1);
            carta.nombre= (i+1) + " de " + palos[j];
            if(i+1===1) carta.nombre= "As" + " de " + palos[j];
            if(i+1===11) carta.nombre= "Jota" + " de " + palos[j];
            if(i+1===12) carta.nombre= "Reina" + " de " + palos[j];
            if(i+1===13) carta.nombre= "Rey" + " de " + palos[j];
            carta.palo=palos[j];
            carta.valor=i+1;
            res.push(carta);
        }
    }
    return res;
}
export {barajaFR_TEXTO};