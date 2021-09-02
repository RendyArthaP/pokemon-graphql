import React from 'react';
import { css } from '@emotion/css';
import { 
  WrapperSearchPokemon, 
  SearchBoxPokemon,
} from '../styled/components/SearchPokemon';

export default function SearchPokemon({ value, onChange }) {
  return (
    <WrapperSearchPokemon>
      <input 
        value={value}
        onChange={onChange}
        className={css`${SearchBoxPokemon}`}
        placeholder="Search your pokemon name here"
      />
    </WrapperSearchPokemon>
  )
};