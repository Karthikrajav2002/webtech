
// //how to declare array

// let arr=[11,2,3,4,5]
// console.log(arr)
// console.log(arr.length)


// let arr2=[11,'raja',true,[2,3]]
// console.log(arr2)
// console.log(arr2.length)


// //  how to access

// console.log(arr[1]);

// //how to modify value in any index

// arr[3]=400
// console.log(arr)


// // how to traverse an array

// let sub=['sql','python','java','webtech']

// for (let i=0;i<sub.length;i++){
//     console.log(sub[i])
// }

// // traversing by "for of" loop

// for (let subs of sub){
//     console.log(subs)
// }

// // Array methods

// //1.push()

// let marks=[34,87,98,99]
// console.log(marks)

// marks.push(90)
// console.log(marks)


// //2.pop()

// let food=['rice','sambar','brinji','maggie','upma']
// console.log(food.pop())
// console.log(food)

// //3.shift()

// let movie=['leo','master','gbu','veeram','avengers','spiderman']

// movie.shift()

// console.log(movie)

// //4.unshift()

// movie.unshift('valimai')

// console.log(movie)


// // let str='hello how are you'
// // s=str.split(" ")
// // t=[]
// // for (let a of s){
// //     k=a.split("")
// //     l=k.reverse()
// //     m=l.join()
// //     o=m.replaceAll(',','')
// //     t.push(o)
// // }
// // n=t.join(" ")
// // console.log(n)



// let str='hello how are you'
// let words=str.split(' ')
// let ans=''
// for (let ele of words)
// {
//     let rev=''
//     for (let i=ele.length-1;i>=0;i--)
//     {
//         rev=rev+ele.charAt(i)

//     }
//     ans+=rev+' '
// }
// console.log(ans.trim())


function is_sor_rot_not(arr){
    let a=0
    for (let i=0;i<arr.length-1;i++)
    {
            if (arr[i]>arr[i+1]){
                a+=1          
    }
}
  
    if (a==0){
        return 'sorted'
    }
    if (arr[arr.length-1]>arr[0])
    {
        a+=1
        console.log(a)
    }
    if (a==1) {
        console.log(a)
        return 'rotated'
        
    } 
    else {
        console.log(a)
        return 'not'
        
    }
}
console.log(is_sor_rot_not([10,20,30,40,50]))
console.log(is_sor_rot_not([40,50,10,20,30]))
console.log(is_sor_rot_not([40,50,35,20,30]))



// cant sort with single loop but can check whether sorted or not by using single loop
let s=[2,3,4,5]
for (let i=0;i<s.length-1;i++){
    if (s[i]<s[i+1]){
        temp=s[i]
        s[i]=s[i+1]
        s[i+1]=temp
    }
}
console.log(s)


//merge two sorted array

function mer_two_sor_arr(arr1,arr2){
    let i=0
    let j=0
    let k=0
    a3=[]
    while(i<arr1.length && j<arr2.length){
        if (arr1[i]<arr2[j]){
            a3[k]=arr1[i]
            i++
        }
        else{
            a3[k]=arr2[j]
            j++
        }
        k++
    }
    // Append any remaining elements from either array
    while(i<arr1.length){
        a3[k]=arr1[i]
        i++
        k++
    }
    while(j<arr2.length){
        a3[k]=arr2[j]
        j++
        k++
    }
    return a3
}

// 11.splice()

let ar=[10,20,30,40,50,60]
let v=ar.splice(2,2,700)
// let v=ar.splice(2,2)
console.log(v)
console.log(ar)
v.splice(2,0,500)
console.log(v)

let f=[3,4,5,6,7,8]
f.splice(2,2,500)
console.log(f)


//higher order function


let printname=function(a){
    console.log(a)
}

let hr=()=>{
    return printname('raja')
}

console.log(hr())



//built in higher order functions of array

let arrr=[110,20,30,40,50]
arrr.map((ele)=>{console.log(ele)})
arrr.map((ele,index)=>{console.log(ele,index)})
arrr.map((ele,index,array)=>{console.log(ele,index,array)})



let subjects=['sql','python','java','node']
let upperArr=subjects.map((ele)=>{
    return ele.toUpperCase()
})
console.log(upperArr)


//2.filter()

let marks=[56,75,59,80,65,90,45,85]

let arr7=[]

marks.map((ele)=>{
    if (ele>70){
        arr7.push(ele)}
})
console.log(arr7)


brr=[2,54,66,90,76,56,84]
let brr1=brr.map((ele)=>{
    return ele+1000
})

console.log(brr1)

let brr2=brr.filter((ele)=>{
    return ele<70
})

console.log(brr2)

brr.forEach((ele)=>{
    console.log(ele)
})
 




