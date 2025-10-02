// Exercices JSON et API

// I. Manipuler des données JSON (simulation d’API)

const users = [
{ id: 1, name: "Alice", age: 22 },
{ id: 2, name: "Bob", age: 30 },
{ id: 3, name: "Charlie", age: 17 },
{ id: 4, name: "Diana", age: 25 }
];

// 1. Afficher tous les noms avec forEach
users.forEach(user => console.log(user.name) );

// 2. Créer un tableau des noms avec map.
const allNames = users.map(user => user.name);
console.log(allNames);

// 3. Filtrer les utilisateurs de plus de 18 ans avec filter
const Majeurs = users.filter(user => user.age > 18)
console.log(Majeurs);

// 4. Trouver l’utilisateur dont l’id = 2 avec find
const idDeux = users.find(user => user.id === 2);
console.log(idDeux);

// 5. Créer un tableau avec uniquement {id, name} (sans l’âge)
const idName = users.map(user => ({ 
    id: user.id, 
    name: user.name 
}));
console.log(idName);


// II. Simulation d’un appel API avec setTimeout

function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Voici vos données 🎉" });
        }, 2000);
    });
}

// 1. Appeler la fonction avec .then et afficher le résultat

fakeApiCall()
    .then ( ( result ) => { 
        console.log(result);
        console.log(result.message);
});

// exemple de promesse
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur :', error)); 
