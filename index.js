// Write your solution in this file!
const employee = {
    "name" : "Franklin",
    'streetAddress': '22 Dog Lane'

}

// console.log(employee)


const updateEmployeeWithKeyAndValue = (obj, key, value) => {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj
}
const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value
    return obj
}

const deleteFromEmployeeByKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key]
    return newObj
}

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
    delete obj[key]
    return obj
    
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'))
