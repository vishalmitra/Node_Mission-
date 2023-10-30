const obj = {
    name: 'vishal mitra',
    age: 22,
    method() { console.log('the name is '+ this.name +'and his age '+this.age  );  }
}

// the arr is with const but it changes because its by the reference  so it can change.
const arr = ["coding", "exercing", "reading seld help and non fiction books "]

// const newobj =  [...arr]; // spread is been used 
// console.log( newobj);

// ... in js  and * in python are similar 
const arrnew = (...param) => {
   console.log(param);
   }

arrnew("coding", "exercing", "reading seld help and non fiction books ");
