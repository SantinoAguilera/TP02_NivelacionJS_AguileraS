function devolverSaludos()
{
    let name = document.getElementById("name");
    if (name.value !== "")
    {
        console.log('Hola Mundo!');
    }
    else
    {
        console.log('Error');
    }
}

function matematica()
{
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (isNaN(number1) || isNaN(number2))
    {
        console.log("Error");
        return;
    }

    console.log('Suma:', number1 + number2);
    console.log('Resta:', number1 - number2);
    console.log('Multiplicación:', number1*number2);
    console.log('División:', number1/number2);
}

function parOImpar()
{
    let number = document.getElementById("number3").value;

    number = parseFloat(number);

    if (isNaN(number))
    {
        console.log("Error");
        return;
    }
    
    if (number % 2 == 0)
    {
        console.log("El numero es par.")
    }
    else
    {
        console.log("El numero es impar.")
    }
}