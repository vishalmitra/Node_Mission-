const obj = {
    name: 'vishal mitra',
    age: 22,
    method() { console.log('the name is '+ this.name +'and his age '+this.age  );  }
}

// obj.method();
// console.log(obj);


const arr = ["coding", "exercing", "reading seld help and non fiction books "]


// for (let hobby of arr) {
//     console.log(hobby);
// }


console.log(arr.map(hobby => { return ('my hobby is ' + hobby); }));
console.log(arr.map(simple => 'my hobby is ' + simple));

console.log(arr);