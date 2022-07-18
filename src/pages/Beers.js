import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'
import BeersDetails from './BeerDetails'



function Beers(){

    const [beers, setBeers]= useState([])

useEffect(()=>{
    axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beers1)=>{
            
            setBeers(beers1.data)
        })
},[])

 return(
    <>
    <Link to="/"><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home'/></Link>
    <br></br><br></br>
        {beers.map((beer)=>{

       return (
        <><Link to={`/${beer._id}`} element={<BeersDetails/>} style={{textDecoration: "none", color: "black"}}>
        <div >
        <img src={beer.image_url} alt="" height={400} width={200}/>
        <br/><h2>{beer.name}</h2>
        <h6>{beer.tagline}</h6><br/>
        <p style={{padding: "0px 20%"}}>{beer.description}</p>
        </div><br></br><br></br>
        </Link>
        </>
       )
    })}
    </>
 )



}


export default Beers