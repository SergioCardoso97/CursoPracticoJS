// codigo del Cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) 
{
    return lado * 4;
}
function areaCuadrado(lado) 
{
    return lado * lado;
}
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log("El perimetro del cuadrado es: " + perimetroCuadrado(56) + "cm");
console.log("El area del cuadrado es: " + areaCuadrado(56) + "cm^2");
console.groupEnd();
// codigo Triangulo
console.group("Triangulo");
/*function perimetroTrian(lado1,lado2,base)
{
    return lado1+lado2+base;
}*/

function areaTriangulo(lados,base)
{
    var altura = Math.sqrt((lados*lados)-((base/2)*(base/2)));
    console.log("La altura del tringulo es: " + altura + "cm");
    return (base * altura) / 2;
}
//console.log("Los lados del triangulo miden: " + ladoTringulo1 + "cm " + ladoTringulo2 + "cm " +ladoTringulo3 + "cm ");
//console.log("El perimetro del tringulo es: " + perimetroTriangulo(6,4) + "cm");
console.log("el area del triangulo es: " + areaTriangulo(6,4) + "cm^2")
console.groupEnd();
// codigo Circulo
console.group("Circulo");
function perimetroCirculo(radio)
{
    return (radio*2) * Math.PI;
}
function areaCirculo(radio)
{
    return (radio*radio) * Math.PI;
}
//console.log("el radio del circulo es: " + radio + "cm");
//console.log("El diametro del circulo es: " + diametro + "cm");
console.log("El perimetro del circulo es: " + perimetroCirculo(4) + "cm");
console.log("El area del circulo es: " + areaCirculo(4) + "cm^2");
console.groupEnd();


function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    alert(perimetroCuadrado(input.value));
}
function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    alert(areaCuadrado(input.value));
}
function calcularPerimetroTriangulo()
{
    const inputLado = document.getElementById("inputTrianguloLados");
    const inputBase = document.getElementById("inputTrianguloBase");
    alert(perimetroTrian(inputLado.value,inputLado.value,inputBase.value));
}
function calcularAreaTriangulo()
{
    const inputLado = document.getElementById("inputTrianguloLados");
    const inputBase = document.getElementById("inputTrianguloBase");
    alert(areaTriangulo(inputLado.value,inputBase.value));
}
function calcularPerimetroCirculo()
{
    const inputRadio = document.getElementById("inputCirculo")
    alert(perimetroCirculo(inputRadio.value));
}
function calcularAreaCirculo()
{
    const inputRadio = document.getElementById("inputCirculo")
    alert(areaCirculo(inputRadio.value));
}

/*<section>
        <h2>Calcula el area y el perimetro de un cuadrado</h2>
        <form>
            <label for="inputCuadrado">
                Escribe cuanto miden cada lado del tu cuadrado:
            </label>
            <input id="inputCuadrado" type="number"/><br>
            <button type="button" onclick="calcularPerimetroCuadrado()">
                Calcular el perimetro
            </button>
            <button type="button" onclick="calcularAreaCuadrado()">
                Calcular el area
            </button>
        </form>
    </section>
    <section>
        <h2>Calcula el area y el perimetro de un triangulo isosceles </h2>
        <form>
            <label for="inputTringuloLados">
                Escribe cuanto miden los lados iguales del tu triangulo isosceles:
            </label>
            <input id="inputTrianguloLados" type="number"/>
            <label for="inputTrianguloBase">
                Escribe cuanto mide la base de tu triangulo isosceles:
            </label>
            <input id="inputTrianguloBase" type="number"/>
            <button type="button" onclick="calcularPerimetroTriangulo()">
                Calcular el perimetro del triangulo
            </button>
            <button type="button" onclick="calcularAreaTriangulo()">
                Calcular el area del triangulo
            </button>
        </form>
    </section>*/