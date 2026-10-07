import products from '../data.json'
import Card from './Card'

let Home=()=>{

    // let products=[  
    //     // paste here the data that we fetch from api
    // ]
    console.log(products);
    
    return(
        <>
        
         <nav>My Product</nav>
      <main>

        {

          products.map((product)=>{
            return <Card
            title={product.title} 
            price={product.price}
            rating={product.rating.rate}
            link={product.image}
            id={product.id}/>
          })
        }
      </main>
        </>

    )
}

export default Home