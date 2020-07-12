# Ruleta al azar con Javascript

_Una ruleta que gira al presionar un botón y te muestra unas de las opciones al azar, las cuales tu puedes configurar a las que tu desees, hecho con HTML, Javascript y CSS_

## Construido con 🛠️

**HTML**

**Javascript**

**CSS**

## Instalación 🔧

_En los archivos del repositorio, se encuentran varios archivos a modificar._

### index.html
_En este archivo se encuentra el código principal, donde puedes modificar los textos o elementos de la aplicación._

### js/funcion.js
_En este archivo existen pocos cambios a realizar, pero realmente los mas importantes, primero si deseas modificar el texto_ **¡FELICIDADES!** _que se muestra una vez dado click en el botón, debes ir a la linea 18 de ese archivo y modificar el texto_

```
h2.innerHTML = '¡FELICIDADES! <br>';
```
_Ahora la parte complicada, a partir de la linea 40, se estipularan cada resultado disponible_

```
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
```
_En este caso cada case va de 45 en 45 porque son 8 valores, y 360/8= 45, si deseas cambiar el numero de opciones solo debes cambiar la cantidad de case y calcular el valor, por ejemplo, si queremos hacer 5 opciones seria así._
```
  case valor > 0 && valor <= 72:
                resultado('100$');
                break;
            case valor > 72 && valor <= 144:
                resultado('2000$');
                break;
            case valor > 144 && valor <= 216:
                resultado('300$');
                break;
            case valor > 216 && valor <= 288:
                resultado('5000$');
                break;
            case valor > 288 && valor <= 360:
                resultado('7000$');
                break;
```
_Dentro de cada case entre () se agrega el string del premio de cada opción, estas opciones son ordenas en sentido contrario a las agujas  del reloj._

### img/
* _Dentro esta carpeta están las imágenes que muestran las opciones, tenemos **background-roulette.png** que es simplemente el marco decorativo._

* _Despues tenemos la imagen **point.png** que es la imagen del puntero en el medio, si deseas esta imagen solo la cambias sobreescribiendo el archivo._

* _Y por ultimo tenemos la imagen **roulette.png** que es la imagen que posee diseñada las opciones, si deseas agregar otras opciones, solo debes sobreescribir con una que las opciones declaradas en el archivo js._
