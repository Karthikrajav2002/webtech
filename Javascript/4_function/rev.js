

function reverse(num)
{

 let rev=0;
    while(num>0)
    {
    digit=num%10

    rev=rev*10+digit

    num=Math.floor(num/10)

    }
  return rev
}