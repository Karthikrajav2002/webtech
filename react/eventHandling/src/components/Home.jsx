
let Home=()=>{

    let phone=()=>{
        alert('you are getting a call')
    }

    function message(a,b){

        alert(a+b)
        
        

    }

    let handlesubmit=function(e){
        e.preventdefault()    }
    return(
       <div className="homeContainer">

        <header>
            <button onClick={phone}>
                call me
            </button>
            <button onClick={()=>message(20,30)}>message</button>
            <form action="submit">

            <button onSubmit={handlesubmit}>submit</button>
            </form>

        </header>



       </div>


    )
}

export default Home