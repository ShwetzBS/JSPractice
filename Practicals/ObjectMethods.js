const jonas = {
    firstName: 'Shweta',
    lastName: 'Bhat',
    birthYeah: 1994,
    calcAge: function (birthYear) {
        return 2023 - birthYear;
    }


};

function calcAge(birthYear) {
    return 2025 - birthYear;
}


console.log(jonas.calcAge(jonas.birthYeah));

console.log(calcAge(jonas.birthYeah));