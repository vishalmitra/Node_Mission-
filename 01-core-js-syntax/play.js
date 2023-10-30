var name = 'Max';
var age = 29;
var hasHobbies = true;
// arrow function 
const summarizeUser = (userName, userAge, userHasHobby) => {
  return `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`;
}
name= "vishal" + "Mitra" + 12
//console.log(typeof (name));

//console.log(summarizeUser(name, age, hasHobbies));

// arrow function when only one statment is there  no return required here
const single = (a, b) => a + b ;


console.log(single(1, 2));

// arrow function when only one parameter is there  no return required here
const other = a => a + 2;

console.log(other(5));

//arrow function when no params in it 

const one = () => 1 * 7;
console.log(one());