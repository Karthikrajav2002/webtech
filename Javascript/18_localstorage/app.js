
// how to add in local storage

localStorage.setItem('myname','raja')
localStorage.setItem('myid','101')
localStorage.setItem('skill',['java','python','webtech'])

// how to get the data

let myname=localStorage.getItem('myname')
console.log(myname);

let id=Number(localStorage.getItem('myid'))
console.log(id)

let skill=JSON.parse(localStorage.getItem('skill'))
console.log(skill);

skill.foreach((ele)=>{
    console.log(ele)
})

// how to remove the items

localStorage.removeItem('myid')

// how to remove all the items

localStorage.clear()
