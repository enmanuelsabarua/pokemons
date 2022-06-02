import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ShowPokemon from './components/ShowPokemon';

function App() {

  const [pokemon, setPokemon] = useState([
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
  ]);

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        // console.log(res);
        setPokemon(res.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getPokemons();
  });

  return (
    <div className="App">
      <header className='header'>
        {/* <h1>Pokemons</h1> */}
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt='Pokemon logo'></img>
      </header>
      <ShowPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
