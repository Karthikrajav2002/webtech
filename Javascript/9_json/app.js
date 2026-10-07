
emp={
    name:'raja',
    age:20,
    isstudent:false
}
console.log(emp);
console.log(typeof emp);

// !JSON.stringify.it used to convert any js data into string(json format)
// object
let jsondata=JSON.stringify(emp);
console.log(jsondata)
console.log(typeof jsondata);


// !JSON.parse(). it is used to convert json to its original format(js(any programming language data type) datatype)

let emp2=JSON.parse(jsondata)
console.log(emp2);
console.log(typeof emp2);


// convert array into json

let arr=[1,2,3,4,5]
console.log(arr);
console.log(typeof arr);

let arr2=JSON.stringify(arr)
console.log(arr2)
console.log(typeof arr2);

let arr3=JSON.parse(arr2)
console.log(arr3);
console.log(typeof arr3);











