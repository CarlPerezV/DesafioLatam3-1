mensaje = document.querySelector("#msj-e2")

function cambiaImg() {

    var image = document.getElementById("imgBoton")
    var rutaActual = image.getAttribute("src")
    mensaje = document.querySelector("#msj-e1")

    if (rutaActual === "src/img/clarita-in.jpg") {
        image.setAttribute("src", "src/img/clarita-out.jpg")
        image.style.border = '3px red'
        image.style.borderStyle = 'groove'
    } else {
        image.setAttribute("src", "src/img/clarita-in.jpg")
        image.style.border = '0px'
    }
}

function verificarTickets() {
    cant1 = document.getElementById("cant-ticket1").value
    cant2 = document.getElementById("cant-ticket2").value
    cant3 = document.getElementById("cant-ticket3").value

    total = Number(cant1) + Number(cant2) + Number(cant3)

    mensaje = document.querySelector("#msj-e2")

    total > 10 ? mensaje.innerHTML = 'Llevas demasiados stickers' : mensaje.innerHTML = 'Llevas ' + total + ' stickers'

    console.log(mensaje)
}

function verificarPass() {
    val1 = document.getElementById("v1").value
    val2 = document.getElementById("v2").value
    val3 = document.getElementById("v3").value

    mensaje = document.querySelector("#msj-e3")

    if (val1 == 9 && val2 == 1 && val3 == 1) {
        mensaje.innerHTML = "Password 1 Correcto"
    } else if (val1 == 7 && val2 == 1 && val3 == 4) {
        mensaje.innerHTML = "Password 2 Correcto"
    } else {
        mensaje.innerHTML = "Password Incorrecto XX"
    }

    console.log("Click", val1)
}