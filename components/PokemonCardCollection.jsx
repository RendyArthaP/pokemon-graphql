import { css } from '@emotion/css';
import Image from 'next/image';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { 
  CardPokemonContent, 
  ButtonDelete
} from '../styled/components/PokemonCard';

export default function PokemonCardCollection({ poke, index }) {
  const { deleteMyPokemon } = useContext(PokemonContext)
  return (
    <div className={css`margin-bottom: 1rem;`}>
      <CardPokemonContent>
        <Image 
          src={poke.dreamworld}
          alt={poke.name}
          width={150}
          height={150}
        />
        <h1>
          {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
        </h1>
      </CardPokemonContent>
      <ButtonDelete onClick={() => deleteMyPokemon(index)}>
        Delete
      </ButtonDelete>
    </div>
 
  )
};