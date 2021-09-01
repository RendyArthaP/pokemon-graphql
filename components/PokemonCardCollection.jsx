import { css } from '@emotion/css';
import Image from 'next/image';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemonContent, ButtonDelete } from '../styled/components/PokemonCard';

export default function PokemonCardCollection({ poke, index }) {
  const { pokemons, newNamePokemon } = poke;
  const { deleteMyPokemon } = useContext(PokemonContext);
  
  return (
    <CardPokemonContent>
      <Image 
        src={pokemons.dreamworld}
        alt={pokemons.name}
        width={150}
        height={150}
      />
      <h1>
        {newNamePokemon.changeName.charAt(0).toUpperCase() + newNamePokemon.changeName.slice(1)}
      </h1>
      <button 
        className={css`${ButtonDelete}`}
        onClick={() => deleteMyPokemon(poke, index)}
      >
        Delete
      </button>
    </CardPokemonContent>
  )
};