import Pokemon from "./Pokemon";
import './ShowPokemon.css';

function ShowPokemon({ pokemon }) {
    return (
        <div className="pokemons">
            {
                pokemon.map((value, index) => <Pokemon key={index} thisPokemon={value}/>)
            }
        </div>
    );
}

export default ShowPokemon;