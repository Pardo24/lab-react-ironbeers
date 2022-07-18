import {Routes, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import NewBeer from './pages/New-Beer';
import Beers from './pages/Beers';
import RandomBeer from './pages/Random-Beer';
import BeersDetails from './pages/BeerDetails';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers  />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/:id' element={<BeersDetails/>}/>
      </Routes> 

      
    </div>
  );
}

export default App;
