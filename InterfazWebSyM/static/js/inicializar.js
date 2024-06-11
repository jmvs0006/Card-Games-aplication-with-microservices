//Esta ruta se ha de modificar para coincidir con la ruta en la que se desplegue el microservicio SieteyMedio en ese momento
const RUTA_MS_SIETEYMEDIO = "http://localhost:8003";

var baraja;
var mano_jugador;
var mano_banca;
var puntuacion_jugador;
var puntuacion_banca;

//Función para obtener la inicialización de la partida
async function ini(){
    try{
        return await fetch(RUTA_MS_SIETEYMEDIO).then(response=>response.json());
    }catch (error){
        res.status(500).json({ error: error.description });
    }
}

//Inicailización de la página
function now(val){
    baraja = val.baraja;
    mano_jugador = val.mano_jugador;
    mano_banca = val.mano_banca;
    puntuacion_jugador = val.puntuacion_jugador;
    puntuacion_banca = val.puntuacion_banca;
    puntos_jugador.innerHTML = puntuacion_jugador;
    mano_jugador.forEach(carta => {
        cartas_jugador.innerHTML += carta.nombre + "<br>";
    });

    puntos_banca.innerHTML = puntuacion_banca;
    mano_banca.forEach(carta => {
        cartas_banca.innerHTML += carta.nombre + "<br>";
    });
}
    //Inicialización de la partida al cargar la página
    document.addEventListener("DOMContentLoaded", (event) => {
        const cartas_banca =document.getElementById('cartas_banca');
        const cartas_jugador =document.getElementById('cartas_jugador');
        const puntos_banca =document.getElementById('puntos_banca');
        const puntos_jugador =document.getElementById('puntos_jugador');


        ini().then(val=>now(val));
      });

//Conexión con el microservicio SieteyMedio para pasar el turno
async function conexion_pasar(partida){
    try{
        return await fetch(RUTA_MS_SIETEYMEDIO+"/pasar",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(partida)
        }).then(response=>response.json());
    }catch (error){
        res.status(500).json({ error: error.description });
    }
}

//Acciones necesarias para terminar la partida
function terminarPartida(partida){
    const boton_reiniciar =document.getElementById('reiniciar');
    const boton_pasar =document.getElementById('pasar');
    const boton_robar =document.getElementById('pedir_carta');
    const mensaje =document.getElementById('mensaje');

    puntos_banca.innerHTML =partida.puntuacion_banca;
    puntos_jugador.innerHTML = puntuacion_jugador;

    cartas_banca.innerHTML = '';
    partida.mano_banca.forEach(carta => {
        cartas_banca.innerHTML += carta.nombre + "<br>";
    });

    switch (partida.ganador) {
        case 1:
          mensaje.innerHTML="Has ganado";
          break;
        case 2:
            mensaje.innerHTML="Ha ganado la banca";
          break;
        case 3:
            mensaje.innerHTML="Has empatado";
          break;
        default:
            mensaje.innerHTML="Error";
      }
    boton_reiniciar.removeAttribute("hidden");
    mensaje.removeAttribute("hidden");
    boton_pasar.setAttribute("hidden","yes");
    boton_robar.setAttribute("hidden","yes");
}

//Función asociada al botón pasar
function Pasar(){
    let partida ={
        baraja,mano_jugador,mano_banca
    }
    conexion_pasar(partida).then(val => terminarPartida(val));
}

//Conexión con el microservicio SieteyMedio para robar una carta
async function conexion_robar(partida){
    try{
        return await fetch(RUTA_MS_SIETEYMEDIO+"/robar",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(partida)
        }).then(response=>response.json());
    }catch (error){
        res.status(500).json({ error: error.description });
    }
}

//Actualiza los valores a loa nuevos obtenidos después de realizar las acciones de la partida
function actualizar(partida){
    console.log(partida.ganador);
    baraja = partida.baraja;
    mano_jugador = partida.mano_jugador;
    mano_banca = partida.mano_banca;
    puntuacion_jugador = partida.puntuacion_jugador;
    puntuacion_banca = partida.puntuacion_banca;
    puntos_jugador.innerHTML = puntuacion_jugador;

    cartas_jugador.innerHTML = '';
    mano_jugador.forEach(carta => {
        cartas_jugador.innerHTML += carta.nombre + "<br>";
    });

    puntos_banca.innerHTML = puntuacion_banca;
    cartas_banca.innerHTML = '';
    mano_banca.forEach(carta => {
        cartas_banca.innerHTML += carta.nombre + "<br>";
    });

    if(partida.ganador === 2) terminarPartida(partida);
}

//Función asociada al botón pedir carta
function PedirCarta(){
    let partida ={
        baraja,mano_jugador,mano_banca
    }
    conexion_robar(partida).then(val => actualizar(val));
}
