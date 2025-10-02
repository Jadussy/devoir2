console.log("hello dubai");

// 1. Avec .map() modifier ce tableau et rajouter " -hello" à la fin de chaque élement

const exo1 = ["a", "b", "c"];

const helloForEachElement = exo1.map(function (element) {
    return element + "-hello";
});

// OU : const helloForEachElement = exo1.map(letter => letter + "hello" );

console.log(helloForEachElement); // Dans la console : ['a -hello', 'b-hello', 'c-hello']

for (let i = 0; i < exo1.length; i++) {
    console.log(exo1[i]);
}
// a
// b
// c

// 2. Avec .map() multiplier elements x2
const nombres = [3, 4, 5, 2, 3];

const nFoisDeux = nombres.map(function (element) {
    return element * 2;
});
console.log(nFoisDeux);

// 3. Avec .filter() Extraire nombres paires (pairs)
const pairs = [12, 6, 9, 8, 566, 0, 2];

const isPairs = pairs.filter(function (element) {
    if (element % 2 == 0) return element;
});
console.log(isPairs);

// 4. Avec .forEach() sommes des elements du tableau
let nombres2 = [12, 2, 8, 9, 82];
let sum = 0;

nombres2.forEach(function (element) {
    sum += element;
});
console.log(sum);

// 5. Recup les paires et les x 2
const nombres5 = [2, 6, 7, 8, 90, 76, 4, 97];

const result5 = nombres5
    .filter((n) => n % 2 == 0)
    .map((n) => n * 2);

console.log(result5);

// 6. Utilisez filter() pour extraire les étudiants ayant une note supérieure à 10
//  map() pour créer un tableau contenant seulement les noms des étudiants
//  forEach() pour afficher message pour chaque étudiant note sup à 15

const students = [
{ name: "Alice", grade: 15 },
{ name: "Bob", grade: 8 },
{ name: "Charlie", grade: 18 },
{ name: "David", grade: 12 }
];

const noteSupTen = students
    .filter(element =>  element.grade > 10)
    .map(element => element.name);

students.forEach(element => {
    if (element.grade > 15)
        console.log("Félicitation pour la note à + 15,", element.name);     
});





