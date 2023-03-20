//vamos a utilizar una arrow funcion,  la vamos a combinar con una promise. Una promise es algo que va a pasar en algun momento, puede ser ahora, mañana o nunca.

const anotherFunction = () => {
return new Promise((resolve, reject) => {
    if (false) {
        resolve('Hey!');
    } else {
        reject('Ohuch!');
    }
})
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//en este caso.... si nuestra logica nos da un valor true entonces el codigo ingresa al .then, en caso contrario, si nos da false, nuestra funcion ingresa al parametro que le hayamos colocado en el .catch.

