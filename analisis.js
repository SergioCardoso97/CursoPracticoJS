//Helpers
function esPar(numero)
{
    return (numero % 2 === 0);
}
//Calculadora de mediana
function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length /2);
    var mediana;
    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        mediana = (personaMitad1 + personaMitad2) /2
        
    }
    else
    {   
        mediana = lista[mitad];
    }
    
    return mediana;
}
// Mediana General
const salariosMex = mexico.map(
    function (persona)
    {
        return persona.salary;
    }
);
const salarioMexSorted = salariosMex.sort(
    function(salaryA,salaryB)
    {
        return salaryA - salaryB;
    }
);
var medianaGeneralMex = medianaSalarios(salarioMexSorted);
// Mediana top 10%
const spliceStart = (salarioMexSorted.length * 90) / 100;
const spliceCount = salarioMexSorted.length - spliceStart;
const salariosMexTop10 = salarioMexSorted.splice(spliceStart,spliceCount);
var medianaTop10Mex = medianaSalarios(salariosMexTop10);
console.log({medianaGeneralMex,medianaTop10Mex});