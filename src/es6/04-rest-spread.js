// desestructuracion de arrays

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//desestructuracion con objetos

let user = {username: 'oscar', age: 34};
let {username, age} = user;
console.log(username, age);

// Spread operator (...)

let person = {name: 'oscar', age: 28};
let country = 'mx';

let data = {...person, country};
console.log(data);

// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum (1, 5, 6, 7);
