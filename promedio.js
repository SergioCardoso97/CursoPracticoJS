//Promedio
function calcularMedia(lista)
{
    /*for(var i = 0; i < lista.length; i++)
    {
        sumaLista += lista[i];
    }*/
    var sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );

    var promedio = sumaLista / lista.length;
    return promedio;
}
console.log(calcularMedia([1,2,3,4]));

