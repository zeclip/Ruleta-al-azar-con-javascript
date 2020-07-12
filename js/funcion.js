/* Variables */
const roulette = document.querySelector("#roulette");
const imgRoulette = document.querySelector("#img-roulette");
const resultadoPremio = document.querySelector('#resultado-premio');
var h2 = document.createElement("h2");
var h3 = document.createElement('h3');

/* Funcion cuando se da click al boton */
roulette.addEventListener("click", giraRoulette);

/* Funcion que da el valor al azar, se utiliza Math.random para obtener un valor al azar*/
function giraRoulette() {
    let rand = Math.random() * 7200;
    calcular(rand);
}
/* Funcion que genera el texto del premio y oculta al boton */
function resultado(txtPremio) {
    h2.innerHTML = '¡FELICIDADES! <br>';
    h3.innerHTML = txtPremio;
    resultadoPremio.appendChild(h2);
    resultadoPremio.appendChild(h3);
    resultadoPremio.className = 'premio-active';
    roulette.style.display = 'none';
}
/* Funcion que calcula el numero al azar y selecciona el premio */
function calcular(rand) {

    /* El valor obtenido, por 360 que son los grados de un circulo */
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;

    // Codigo que hace girar la imagen
    imgRoulette.style.transform = "rotate(" + rand + "deg)";
    setTimeout(() => {
        switch (true) {
            /*
            La cantidad de case es la cantidad de opciones que tenga su ruleta
            Se le envia a la function resultado() el premio de cada opcion
            */
            case valor > 0 && valor <= 45:
                resultado('100$');
                break;
            case valor > 45 && valor <= 90:
                resultado('2000$');
                break;
            case valor > 90 && valor <= 135:
                resultado('300$');
                break;
            case valor > 135 && valor <= 180:
                resultado('5000$');
                break;
            case valor > 180 && valor <= 225:
                resultado('7000$');
                break;
            case valor > 225 && valor <= 270:
                resultado('800$');
                break;
            case valor > 270 && valor <= 315:
                resultado('400$');
                break;
            case valor > 315 && valor <= 360:
                resultado('1000$');
                break;
        }

    }, 5000);

}