
// objet destructure

// object destructure is a feature used  to extract multiple properties from an object and assign them to distinct variables using a single statement.

// for performing this we need {} , inside that all the keyname wee have to provide , so that we can use them as separate variables.



let student={ 
    sname: 'dhoni',
    age:7,
    isPlayer:true,
    skills:['math','science','english','rhymes']
}

console.log(student.sname);
console.log(student.age);


let {sname,age,skills,isPlayer}=student

console.log(sname)
console.log(age)
console.log(isPlayer)
console.log(skills)



// ! rest parameter(...)

// rest parameter allows a function to accept infinite number of arguments as an array.

// it is denoted by three dots (...)

// we can use this only for the last parameter


function f1(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c)
}
f1(10,20,30,40,50)


// !spread operator

// it is used for an iterable (like an array or string) or an object to be expanded or unpacked into individual element or properties

// it is also denoted by three dots

// it is used to merge object or arrays

let frontend=['html','css','js','react']
let backend=['python','node','express','mongodb']

console.log(frontend);
console.log(...frontend);

//  if we want to combine two array into an single array then we use the below syntax

let fullstack=[...frontend,...backend]
console.log(fullstack)//['html','css','js','react','python','node','express', 'mongodb']


// ! merge two objects also

let ob1={name:'raja'

}
let ob2={age:24

}
console.log({ob1,ob2})

let ob3={...ob1,...ob2}
console.log(ob3);


// !shallow copy and deep copy
// which is slightly differ from python

let sub=['java','python']

let copy1=sub

sub.push('nodejs')

console.log(copy1);

let skil=['python','java','js']

let copy2=[...skil]

copy2.push('express')

console.log(skil);







