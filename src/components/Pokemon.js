import { useEffect, useState } from 'react';
import './Pokemon.css';
import axios from 'axios';

function Pokemon({ thisPokemon }) {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: {
            front_default: ""
        }
    });

    const getPokemons = (url) => {
        axios.get(url)
            .then(res => {
                // console.log(res);
                setOnePokemon(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getPokemons(thisPokemon.url);
    })

    return (
        <div className='pokemon'>
            <img src={onePokemon.sprites.front_default} alt="Pokemon"></img>
            <p>{onePokemon.name}</p>
        </div>
    );
}

export default Pokemon;