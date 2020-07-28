// const myfunc1 = (myString) => {
//     return `Hello ${myString}`;
// }

// const myfunc2 = (myString2) => {
//     return `Goodbye ${myString2}`;
// }

// const myCallback = (myString3, func) => {
//     return func(myString3);
// }

// // console.log(myCallback('John', myfunc1));
// console.log(myCallback('John', myfunc2));

// const selector = document.querySelector('#main-btn');
// selector.addEventListener('click', () => {
//     console.log('button has clicked')
// });

// //selects first one
// //requires the .className or #idName spelled out
// const div = document.querySelector('#main-btn');

// const whatIsTheID = (e) => {
//     return `The element ID is ${e.target.id}!`;
// }

// selector.addEventListener('click', whatIsTheID);

const youClicked = () => {
    console.log("You clicked me");
}

const buttonclicked = document.querySelector('#main-btn');

buttonclicked.addEventListener('click', youClicked);

