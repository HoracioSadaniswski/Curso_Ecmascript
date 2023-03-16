//antes de ecmascript 6
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 30;
    var country = country || 'Arg';
    console.log(name, age, country);
}

newUser();
newUser('Horacio', 30, 'Bz');

//sintaxis luego de ecmascript 6.
function newAdmin(name = 'Horacio', age = 28, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 20, 'Peru');

