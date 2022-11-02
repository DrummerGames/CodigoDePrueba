let ataqueJugador
let ataqueOponente


function iniciarJuego() {
    let botonPersonajeJugador = document.getElementById('boton-personaje')
    let botonFuego = document.getElementById ('boton-fuego')
    let botonAgua = document.getElementById ('boton-agua')
    let botonTierra = document.getElementById ('boton-tierra')
    
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarPersonajeJugador() {
    let inputsubzero = document.getElementById('subzero').checked
    let inputscorpion = document.getElementById('scorpion').checked
    let inputtremor = document.getElementById('tremor').checked
    let spanPersonajeJugador = document.getElementById ("personaje-jugador")
   
    if (inputsubzero == true){
        spanPersonajeJugador.innerHTML = "Subzero"
    } else if (inputscorpion == true) {
        spanPersonajeJugador.innerHTML = "Scorpion"
    } else if (inputtremor == true) {
        spanPersonajeJugador.innerHTML = "Tremor"
    }else {
        alert("seleccione un personaje")
    }
    
    seleccionarPersonajeOponte()

    function seleccionarPersonajeOponte() {
        let personajeAleatorio = aleatorio(1,3)
        let spanPersonajeOponente = document.getElementById("personaje-oponente")
        
        if (personajeAleatorio == 1) {
            spanPersonajeOponente.innerHTML = "Subzero"
        } else if (personajeAleatorio == 2){
            spanPersonajeOponente.innerHTML = "Scorpion"
        } else {
            spanPersonajeOponente.innerHTML = "Tremor"
        }
    }
}

function ataqueFuego () {
    ataqueJugador = 'Fuego'
    ataqueOponente = ataqueAleatorioOponente()
    crearMensaje()

}
function ataqueAgua () {
    ataqueJugador = 'Agua'
    ataqueOponente = ataqueAleatorioOponente ()
    crearMensaje()
}
function ataqueTierra () {
    ataqueJugador = 'Tierra'
    ataqueOponente = ataqueAleatorioOponente ()
    crearMensaje() 
}
    
function ataqueAleatorioOponente() {
   let ataque =  aleatorio(1,3)
        
    if (ataque == 1) {
        ataque = 'Fuego'
    } else if (ataque == 2){
        ataque = 'Agua'
    } else {
        ataque = 'Tierra'
    }

    return ataque
}

function crearMensaje (){
    let SectionMensajes = document.getElementById("mensajes") 
    let parrafo = document.createElement("p")

    parrafo.innerHTML = "Tu personaje ataco con " + ataqueJugador + " , el contrincante ataco con " + ataqueOponente + " inderterminado"
    SectionMensajes.appendChild (parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random () * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)