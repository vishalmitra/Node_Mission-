const obj = {
    name: 'vishal mitra',
    age: 22,
    method() {
        console.log('the name is ' + this.name + ' and his age ' + this.age);
    }
}

const arr = ["coding", "exercising", "reading self-help and non-fiction books"];

const { name: myname, age: myage } = obj; // Destructure the properties from the obj object use same names in the objects 

const [ele1, ele2] = arr;
console.log()

console.log(myage, myname); // Print myage and myname


const fun = ({ name, age }) => console.log("my name is " + name + "and age is " + age)


fun(obj);