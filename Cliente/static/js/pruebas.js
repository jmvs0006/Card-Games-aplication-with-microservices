const CARTAS_POR_PALO_FR = 13;
const NUM_PALOS = 4;
let res = [];
   // let carta = new Object();
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
            //carta.palo=palos[j];
            //carta.valor=i+1;
            res.push(carta);
        }
    }
console.log(res);