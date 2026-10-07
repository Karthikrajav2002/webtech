import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";


let Home=()=>{
    return(
        <div >
       
            <h1>this is home component</h1>
            <Navbar/>
            <div class='cart'>
            <Card/>
            <Card/>
            <Card/>
            </div>
            
            <Footer/>

        </div>
    )
}

export default Home;
