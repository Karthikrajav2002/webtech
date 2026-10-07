

let student={
    sname:'raja',
    sid:29,
    isstudying:false,
    skills:['sql','python','webtech'],
    address:{
        city:'chennai',
        pin:5050
    },
    work :function (){
        console.log('love to sleep')
    }
    }
console.log(student)


// How to access object properties

console.log('student name is',student.sname);
console.log('student id is',student.sid);
console.log('the student skills are ',student.skills)
console.log('the student third skills are ',student.skills[2])
console.log('the student address is ',student.address);
console.log('the student pin is ',student.address.pin);
student.work()



// employee object

employee={
    ename:'isham',
    eid:43,
    address:'chennai kuruku sandhu',
    no:542657776577,
    job:'gamer',
    companyname:'infotech',
    personal:{
        lover:'samantha',
        favmov:'godzilla'
    },
    ishamfuncc: function(){
        console.log('sometimes hardest decision will take some wills')
    }
}
console.log('the object',employee)


// how to modify delete and add property

student.sid=102;
console.log(student)

student.phno=42543636;

delete student.isstudying


console.log(student['sid'])


// 1.object.keys()
// it is used to get the keys of the object

// 2.object.values()
//  it is  used to get values of the object

// 3.object.entries()
// it is used to get the key value in nested array


// 4. object.freeze()

// this method is used to make the object frozen

// we cant perform any curd operation (add,modify,delete) with object.

// 5. object.isFrozen()

// it is used to check object is frozen or not

// it will return boolean value

// 6.object.seal()

// this method is similar to 'object.freeze' here  also wee cant add or delete any property but here we can modify the property.

// 7.object.isSealed

// this method is used to check object is sealed or not
// it will return boolean value

// 8.object.assign()

// this method is used to combine more than two objects and it returns one new object

// syntax: object.assign(target,source1,source2.....source_n)

// 9.hasOwnProperty()

// this method is used to know any property is present or not inside the object

// it will return boolean value

let stu={
    sname:'raja',
    sage:24
}

stu.hasOwnProperty(sname)   //true
stu.hasOwnProperty(sid) //false

let obj2={
    ob:'projector',
    project_name:'epsion',
    color:'white',
    price:340
}

console.log('before seal');

console.log(obj2);

Object.seal(obj2)

obj2.color='red'   //we can modify

obj2.brand='apple'  //we cant add

delete obj2.price   //we cant delete

console.log(obj2.color);
console.log(obj2.brand);
console.log(obj2.price);


// object.assign()

let ob3={
    name:'raja'
}
let ob4={
    name2:'rani'
}
// let m=Object.assign(ob3,ob4)  since this diretly modify thhe ob3 object we use empty object{}
let m=Object.assign({},ob3,ob4)

console.log(m)


// creating object using class

class students{
    constructor(sname,sage,sid)
    {
        this.sname=sname
        this.sage=sage
        this.sid=sid
    }
}

let stu1=new students('dhoni',7,10)
let stu2=new students('virat',18,5)
let stu3=new students('rohit',45,8)







