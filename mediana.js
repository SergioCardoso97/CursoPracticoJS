//Mediana
const lista1 = [400,100,200,300,500,600];
const mitadLista1 = lista1.length / 2;
let mediana;
function esPar(numero)
{
    lista1.sort();
    if(numero % 2 == 0)
    {
        return true;
    }
    else
    {   
        return false;
    }
}
function calcularMediana(lista)
{
    if(esPar(lista1.length))
    {
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];
        mediana = (elemento1 + elemento2) / 2;
    }
    else
    {
        mediana = lista1[parseInt(mitadLista1)]
    }

    return mediana;
}
console.log(calcularMediana(lista1));