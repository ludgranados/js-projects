/*** Arrays Notes */

// Strings Properties and Methods

let firstString = 'Hello World';
firstString = 'Hello Universe';
let wordString = 'meow, oomf, yikes, whoa'

console.log(firstString);
console.log(firstString.length);

console.log(firstString.indexOf('o'));
console.log(firstString.trim());
console.log(firstString.toUpperCase());
console.log(firstString.toLowerCase());
console.log(firstString.substr(0,5));
console.log(firstString.substr(6,14));
console.log(firstString.split(' '));
// console.log(wordString.split(, ));
console.log(wordString.toUpperCase().split(', '));


// Arrays

let firstArray = new Array(1, 2, 3, 4); // [1, 2, 3, 4]
console.log('first array: ', firstArray);
let coolerArray = [10, 20, 30, 40];
console.log('cooler array: ', coolerArray);



let fruits = ['Apples', 'Oranges', 'Plums', 'Jackfruit'];
console.log('fruits: ', fruits);
console.log(fruits[1]);
console.log('I like ' + fruits[1] + ' and ' + fruits[2]);



fruits.push('Mangos', 'Peaches');
console.log(fruits);


fruits.pop();
console.log(fruits);


fruits.unshift('Tacos');
console.log(fruits);

fruits.shift();
console.log('removing tacos', fruits);


console.log('how many items are in my fruits array?', fruits.length);


let emptyArray = [];
console.log(emptyArray.length);
if(emptyArray.length !== 0) {
    console.log('no items in empty array');
}

fruits.push('Watermelon');
fruits.unshift('Cherries');

for (let i = 0; i < fruits.length; i++) {
    // debugger;
    console.log(fruits[i]);
}


/*** Challenge */

// Create an array of you top 5 movies
// create a loop that console.logs each of those movies
// use toUpperCase() to console.log all movies in all caps

let favMovies = ['Gladiator', '300', 'Troy', 'Assasins Creed', 'John Wick'];
console.log(favMovies);


for (let l = 0; l < favMovies.length; l++) {
    // debugger;
    // console.log(favMovies[l]);
    console.log(favMovies[l].toUpperCase());
}

// Movie project using while instead of for

// let l = 0;
// while (l < favMovies.length) {
//     console.log(favMovies[l].toUpperCase());
//     l++;
// }


// concat method

// let alexBritMovies = alexMovies.concat(movies);
// console.log(alexBritMovies);

// let mixedArray = ['string', 1, false];

// console.log(mixedArray)