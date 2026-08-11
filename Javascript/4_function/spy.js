function spynumber(n)
{

    let a=0;
    let b=1;

    while(n>0);
    {
        let ld=n % 10

        a = a+ld;
        b = b+ld;
    
        n=Math.floor(n/10);

    }
    return a==b;
    
}

spynumber(1142)

console.log(spynumber(123))
console.log(spynumber(124))



