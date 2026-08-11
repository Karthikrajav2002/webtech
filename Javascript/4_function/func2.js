

let isauto=function(n)
{
    let temp=n
    let a=n**2
    let count=0
    while(temp>0){
        count+=1
        temp=Math.floor(temp/10)
    
    }
    let b=10**count
    if (n == a%b)
     return true
    else
        return false
}
console.log(isauto(75))

let count=(n)=>{
    let dig=0
    while(n>0)
    {
        dig+=1
        n=Math.floor(n/10)
    }
    return dig 
}

let power=function(b,e){
    return b**e
}

let armstrong=(n)=>{
    let temp=n
    let c=count(n)
    arms=0

    while(n>0){
        ld=n%10
        arms+=power(ld,c)
        n=Math.floor(n/10)
    }
    if(arms==temp)
        console.log('yes')
    else
        console.log('no')
    return arms

}
console.log(armstrong(1634))

