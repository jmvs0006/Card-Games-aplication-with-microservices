const RUTA_MS_BLACKJACK = "http://localhost:8002/";

var baraja;
var mano_jugador;
var mano_banca;

const cartas_banca =document.getElementById('cartas_banca');
const cartas_jugador =document.getElementById('cartas_jugador');
const puntuacion_banca =document.getElementById('puntos_banca');
const puntuacion_jugador =document.getElementById('puntos_jugador');

function inicializar(){
    try{
        let aux = fetch(RUTA_MS_BLACKJACK).then(response=>response.json());
    }catch (error){
        res.status(500).json({ error: error.description });
    }
    baraja = aux[1];
    mano_jugador = aux[2];
    cartas_jugador.innerHTML(mano_jugador);
    puntuacion_jugador.innerHTML(aux[4]);
    mano_banca = aux[3];
    cartas_banca.innerHTML(mano_banca);
    puntuacion_banca.innerHTML(aux[4]);
}