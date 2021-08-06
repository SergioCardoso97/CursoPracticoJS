//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

function calcularPrecioConDescuento(precio,descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
console.log(calcularPrecioConDescuento(100,15));

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/

function calcularDescuento()
{
    const inputPrecio = document.getElementById("inputPrice");
    const inputDescuento = document.getElementById("inputDiscount");
    const resultado = document.getElementById("resultado");
    if( inputDescuento.value == 10)
    {
        resultado.innerText = "El cupon apliado fue de 10% de descuento";
        resultado.innerText = "El precio a pagar es: $" + calcularPrecioConDescuento(inputPrecio.value,inputDescuento.value);
    }
    else if(inputDescuento.value == 15)
    {
        resultado.innerText = "El cupon apliado fue de 15% de descuento";
        resultado.innerText = "El precio a pagar es: $" + calcularPrecioConDescuento(inputPrecio.value,inputDescuento.value);
    }
    else if(inputDescuento.value == 20)
    {
        resultado.innerText = "El cupon apliado fue de 20% de descuento";
        resultado.innerText = "El precio a pagar es: $" + calcularPrecioConDescuento(inputPrecio.value,inputDescuento.value);
    }
    else
    {
        resultado.innerText = "El cupon no existe :(";
    }
       
}

console.log(6 === "6");