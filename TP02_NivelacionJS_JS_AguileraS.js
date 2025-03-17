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

function contarCaracteres()
{
    let text = document.getElementById("text").value;

    console.log(text.length);
}

function repetirFrase()
{
    let text = document.getElementById("phrase").value;
    let repetition = document.getElementById("repetition").value;

    for (let i = 0; i < repetition; i++)
    {
        console.log(text);
    }
}

function multiplos()
{
    let num = document.getElementById("number4").value;

    for (let i = 0; i < 10; i++)
    {
        console.log(num * (i + 1));
    }
}

    const rng = Math.floor(Math.random(10) + 1);
    console.log(rng);

function adivinarNumero()
{
    let num = document.getElementById("number5").value;

    num = parseFloat(num)

    if (num > rng)
    {
        console.log("Menor");
    }
    else if (num == rng)
    {
        console.log("Acertaste");
    }
    else
    {
        console.log("Mayor");
    }
}

function contarVocales()
{
    let text = document.getElementById("word").value;
    text = text.toLowerCase()
    let cantVocales = 0;

    for (let i = 0; i < text.length; i++)
    {
        if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u')
        {
            cantVocales++;
        }
    }

    console.log(cantVocales);
}