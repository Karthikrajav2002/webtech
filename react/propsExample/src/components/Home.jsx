import Card from "./Card"

let Home=()=>{
    return(
        <>
        <header>

        <h1>this is home component</h1>

        </header>
        <main>
            <Card product={'laptop'} price={70000} rating={4.5}/>
            <Card product={'Mobile'} price={60000} rating={3.5}/>
            <Card product={'playstation'} price={90000} rating={5}/>
        </main>
        
        
        </>
    )
}

export default Home