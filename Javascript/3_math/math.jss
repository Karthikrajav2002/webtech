// math.max()

console.log(Math.max(4,8))
console.log(Math.max(4,8,56))

// math.min()

console.log(Math.min(3,9,23,75,88))
console.log(Math.min(3,7,5,9,34))


// Math.sqrt()

console.log(Math.sqrt(100))
console.log(Math.sqrt(256))

// Math.abs()

console.log(Math.abs(-249.5))
console.log(Math.abs(-56))

//  !math.floor()

console.log(Math.floor(5.3))
console.log(Math.floor(45.9999))


//  Math.ceil()

console.log(Math.ceil(4.8))
console.log(Math.ceil(4.00000001))



// Math.round()

console.log(Math.round(7.6))
console.log(Math.round(7.4))
console.log(Math.round(7.5))

// Math.random()

console.log(Math.random())

// by default the range of 0.0 to 1.0

// generate one number between 0 to 10

console.log(Math.floor(Math.random()* 10))


// ! generate 4 digit otp

console.log("-------------otp-------------")

let otp=Math.floor(Math.random()*9000+1000)

console.log(otp)


// 0 to 25

let num= Math.floor(Math.random()*16+10)

console.log(num)

// formula is math.random((max-min)+1)+min 

// math.pow()

console.log(Math.pow(3,3))


// program using for loop

let b=5;
let p=3;

let mul=1;

for (let i=1; i<=p; i++)
{
    mul=mul*b 
    
}
console.log(mul)


a=0
b=1
for (let i=1; i<=10; i++)
{
    console.log(a)
    let temp=a
    a=b
    b+=temp
}


let c=0
let d=1
let sum=0
for (let j=1; j<=10; j++)
{
    sum+=c
    let temp=c
    c=d
    d+=temp
    
}
console.log(sum)