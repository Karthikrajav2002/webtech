
let players=[
    {name:"Sachin",
    age:50, 
    country:"India",
    jersy_no:20},

    {name:"Virat",
    age:30,
    country:"India",
    jersy_no:70}, 

    {name:"Rohit",
    age:32,
    country:"India",
    jersy_no:80},

    {name:"Smith",
    age:35, 
    country:"Australia", 
    jersy_no:29},

    {name:"Warner", 
        age:33, 
        country:"Australia",
        jersy_no:65}]

players.map((player)=>{console.log(player)});

avg=players.reduce((acc, player) => acc + player.age, 0) / players.length;
console.log("Average age of players is: ", avg);

upper=players.map((ele)=>{
    return ele.name.toUpperCase()
})
console.log(upper)


players.map((ele)=>{console.log(ele.jersy_no)})

