function documentoListo() {
    botonPersonaje = document.getElementById('boton-personaje');
    botonPersonaje.innerHTML = "pelotero"
    valorDelInput = ""

    input = document.createElement('input')
    input.type = "text"
    input.size = 20
    input.style.display = "inline-block"

    input.addEventListener('keypress', presionarBotonInput)
    botonPersonaje.parentNode.appendChild(input)

    function presionarBotonInput(e) {
        valorDelInput += e.key
        botonPersonaje.innerHTML = cambiarValorDelInput(valorDelInput)
    }

    function cambiarValorDelInput(valorDelInput) {
        return valorDelInput += " US$ 25.00 - "
    }
}



window.addEventListener('load', documentoListo)