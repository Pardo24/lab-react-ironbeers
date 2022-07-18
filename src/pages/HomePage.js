import {Link} from 'react-router-dom'
import image1 from '../assets/beers.png'
import image2 from '../assets/new-beer.png'
import image3 from '../assets/random-beer.png'


function HomePage(){



return(
    <>
    <div>
    <Link to='/beers'>
        <img src={image1} alt='beers'/></Link>
        <h2>All Beers</h2>
        <p>Find a collection of the finest beers</p>
    
</div>

    <div>
    <Link to='/random-beer'>
    <img src={image2} alt='beers'/> </Link>
        <h2>Random Beers</h2>
        <p>Surprise yourself with a random beer</p>
   
</div>

    <div>
    <Link to='/new-beer' >
    <img src={image3} alt='beers'/> </Link>
        <h2>New Beer</h2>
        <p>Add a beer of your own!</p>
   
</div>

    </>
)

}

export default HomePage


