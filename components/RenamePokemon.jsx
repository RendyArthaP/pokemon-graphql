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

export default function RenamePokemon({ inputNamePokemon, setInputPokemon, handleChangeName}) {
  const { getPokemon } = useContext(PokemonContext);
  const pokemon = getPokemon.pokemons.results;
  const pokemons = pokemon.find((poke) => {
    return poke;
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