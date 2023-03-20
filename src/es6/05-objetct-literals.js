// enchaced objet literals
//anteriormente a Ecmascript 6 si queriamos que una funcion retorne los elementos de un objeto, teniamos que declarar primeramente cada elemento coomo en el ejemplo siguiente

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
}

//luego de ecmascript 6 podemos usar la siguiente sintaxis, siempre y cuando no necesitemos cambiar los nombres de los elementos, por lo que tendran la misma denominacion que los parametros que utilizo en la funcion.
function newUser(user, age, country) {
    return {
        user,
        age,
        country,
    }
}

console.log(newUser('Hora', 30, 'Ars'));