import { css } from '@emotion/css';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { 
  Background, 
  Button, 
  FormInput, 
  InputName, 
  Modal, 
  ModalWrapper, 
  WrapperModal 
} from '../styled/components/RenamePokemon';

export default function RenamePokemon({ name, inputNamePokemon, setInputPokemon, handleChangeName}) {
  const { getPokemon, alert } = useContext(PokemonContext);
  const pokemon = getPokemon.pokemons.results;
  const pokemons = pokemon.find((poke) => {
    return poke.name === name;
  });

  return (
    <WrapperModal>
      <Background></Background>
      <Modal>
        <ModalWrapper>
          <h4 className={css`text-align: center;`}>
            You must rename your pokemon:
          </h4>
          <FormInput onSubmit={(e) => handleChangeName(e, pokemons)}>
            <span className={css`
              margin-bottom: 15px; 
              margin-top: -15px;
              text-align: center; 
              color: #FF0000;
            `}>
              {alert}
            </span>
            <InputName 
              value={inputNamePokemon}
              onChange={(e) => setInputPokemon(e.target.value)}
            />
            <Button type='submit'>
              Submit
            </Button>
          </FormInput>
        </ModalWrapper>
      </Modal>
    </WrapperModal>
  )
};