
// function addToArray (users, value){
//     users.push(value)
//     return users
// }

// // module.exports=addToArray

// const remove = function(array, rvalue){
//     array.splice(rvalue, 1)
//     return array
// }
// module.exports = {addToArray, remove}


export function addToArray (users, value){
    users.push(value)
    return users
}

// module.exports=addToArray

export const remove = function(array, rvalue){
    array.splice(rvalue, 1)
    return array
}

