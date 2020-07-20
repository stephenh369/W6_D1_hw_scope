// 1.

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }

//   const verdict = declareMurderer();
//   console.log(verdict);

// A. returns 'The murderer is Miss Scarlet.' 
// Reason: Because properties of scenario has been defined before other functions/variables.

// 2.

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// A. Type error.
// Reason: Trying to reassign a constant variable.

// 3.

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// A. firstVerdict returns Mrs Peacock, secondVerdict returns Professor Plum.
// Reason: firstVerdict is getting its value from the variable murderer defined inside the declareMurderer function,
        // secondVerdict is getting its value from the variable murderer defined outside the declareMurderer function.

// 4.

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// A. variable suspects will return Miss Scarlet, Professor Plum, Colonel Mustard. Second console log returns Mrs Peacock.
// Reason: suspects is taking the variable suspectThree that is defined in the declareAllSuspects function.

// 5.

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

  // A. console.log returns 'The weapon is the Revolver'.
  // Reason: changeWeapon has been called before verdict was called in console, therefore the object was mutated before.

// 6.

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// A. 'The murder is Mrs White.'
// Reason: the changeMurder function is called, which also calls the plotTwist function inside it. 
// This changes the murderer variable to Mrs White.

// 7.

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// A. 'The murderer is Mr Green.'
// Reason: although the last function called in changeMurderer is plotTwist, that variable is never read because it is redefining the murderer variable.
// The declareMurder takes the value from the murderer variable defined outside the functions, and this variable is only redefined once to 'Mr Green'.

// 8.

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

  // A. 'The weapon is Candle Stick.'
  // Reason: The reason it does this is becuase the order of the functions won't affect the outcome.
  // Although unexpectedOutcome is being called before PlotTwist(which the outcome of would change the murderer name) in the the code it will use hoisting to deploy the functions in the order that is needed.

// 9.

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// A. 'The murderer is Professor Plum.'
// Reason: the variable inside the if statement is not redefining the old one, its a new variable local to that block of code and is never read.