// /*** Objects Notes */

// let firstObject = new Object();
// console.log(firstObject);

// let person = {
//     name: 'Ludwin',
//     hobby: 'Reading',
//     age: 37,
//     isAwesonme: true,
//     favoriteFruits: ['mangos', 'oranges', 'strawberries'],
//     'likes running': true,
//     pet: {
//         type: 'dog',
//         name: 'Bucky',
//         age: 2,
//     },
// };

// console.log(person);
// console.log(person.name);
// console.log(person['hobby']);
// console.log(person['likes running']);
// console.log(person.pet);
// console.log(person.pet.name);

// // Object properties

// //delete obj.prop
// delete person.hobby;
// console.log('personnnnnn', person);

// // key in obj
// console.log('name' in person);

// // for(let key in obj)
// for (let key in person) {
//     // debugger;
//         console.log('the key name is: ', key);
//     console.log('this key value is: ', person[key]);
// }

// let alertArray = ['first va', 'second val', 'third val'];

// alert(person.name + ' ' + person.age);

// Arrays and Objects

let animals = [
    {
        type: 'cat',
        name: 'Bojangles',
        isEvil: true,
    },
    {
        type: 'dog',
        name: 'Bob',
        isEvil: false,
    },
    {
        type: 'bird',
        name: 'Doug',
        isEvil: true,
    },
];

//Higher Order array Methods
// forEach()
animals.forEach(function (animal) {
    console.log("my animal", animal.name);
});

// arr.map()
// let animalTypes = animals.map(function (animalType) {

// });

let animalTypes = animals.map((animal) => {
    console.log('inside the map func', animal);
    return animal.type;
});

console.log('Anima types: ', animalTypes);


// arr.filter()
let evilAnimals = animals.filter((animal) => {
    // check if object.isEvil property is true
    // if it is, return that animal
    return animal.isEvil === true;
});

console.log('these are the evil animals', evilAnimals);



let evilAnimalNames = animals.filter((animal) => {
    return animal.isEvil === true;
})
.map(evilAnimal => {
    return evilAnimal.name;
});

console.log('my evil animal names: ', evilAnimalNames);




// create a for loop that iterates through the animals array
// and console logs each animal name

// console.log('name' in animals);

// for (let key in animals) {
//     // debugger;
//         console.log('the key name is: ', key);
//     console.log('this key value is: ', animals[key]);
// }

// console.log('name' in animals);


// // Merhawitt

// for (let key in animals) {
//     // debugger;
//         console.log('the key name is: ', key);
//     console.log('this key value is: ', animals[key].name);
// }


// for (let i = 0; i < animals.length; i++){
//     console.log('=====', animals[i].name)
// }


