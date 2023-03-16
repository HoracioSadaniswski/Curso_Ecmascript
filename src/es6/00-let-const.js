/* Declarar una variable
    -Declaramos la variable lastName
    -Asisgnamos esa variable el nombre 'David'.  */
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// Tanto con var como con let podemos reasignar valores a nuestras variables.

const animal = 'Dog';
animal = 'Cat';
console.log(animal);
// A diferecia de las variables creadas mediante var y let, cuando utilizamos const la variable no puede ser reasignada, y si tratamos de reasignar un valor a la misma nos producirá un error.

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope (global) se puede acceder desde fuera del blocke del if 
        let fruit2 = 'Kiwi'; // block scope (no se pueden acceder desde fuera del blocke donde son declaradas)
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
// En este caso, las palabras reservadas let y const solo pueden ser accedidas dentro del blocke donde son declaradas, a diferecina del var que se trata de una plabra reservada global. Es por ello que cuando queremos acceder llamando la funcion fruits() nos da un error a partir de la segunda variable que es declarada con let.


