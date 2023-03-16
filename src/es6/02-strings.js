//Concatenando strings antes de ecmascript 6
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';


//como concatenar strings luego de ecmascript 6.(Template literals)
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

//multi-line strings
let lorem = 'esto es un string \n' + 'esto es otra linea';

let lorem2 = `Esta es una frase epica
 esto es la continuacion de la frase.
`;

console.log(lorem);
console.log(lorem2);