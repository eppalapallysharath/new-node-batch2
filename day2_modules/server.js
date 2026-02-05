// console.log(require("./math.js"))
// const  users = require("./users.js")
// const {add, sub} = require("./math.js")


// let obj1 = {name:"sharath"}
// obj1 = {class:"10th"}

//  console.log(obj1)


// // console.log(addValue(["tom","jerry", "ben"], "tony"))
// console.log(users.addToArray(["tom","jerry", "ben"], "tony"))
// console.log(users["remove"](["tom","jerry", "ben"],0))

// console.log(add(1,3))
// console.log(sub(5,2))

import addition,{sub} from "./math.js"
import {addToArray,  remove} from "./users.js"
console.log(addition(1,2))
console.log(sub(5,8))

console.log(addToArray(["tom","jerry", "ben"], "tony"))
console.log(remove(["tom","jerry", "ben"],0))

