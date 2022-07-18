import { Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'


function BeersDetails(){

    const [foundBeer, setFoundBeer]= useState([])
const {id} = useParams()



useEffect(()=>{
    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((beers3)=>{
            setFoundBeer(beers3.data)
        })
},[])

 return(
    <>
    <Link to="/"><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home'/></Link>
    <br></br><br></br>
   
        
        <>
        <div >
        <img src={foundBeer.image_url} alt="" height={400} width={200}/>
        <br/><h2>{foundBeer.name}</h2>
        <h6>{foundBeer.tagline}</h6><br/>
        <p style={{padding: "0px 20%"}}>{foundBeer.description}</p>
        </div><br></br><br></br>
        
        </>
       
    </>
 )



}


export default BeersDetails