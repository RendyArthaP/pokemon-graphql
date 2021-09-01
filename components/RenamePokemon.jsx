import { css } from "@emotion/css";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { 
  Background, 
  Button, 
  FormInput, 
  InputName, 
  Modal, 
  ModalWrapper, 
  WrapperModal 
} from "../styled/components/RenamePokemon";

export default function RenamePokemon({ inputNamePokemon, setInputPokemon, handleChangeName}) {
  const { getPokemonDetail } = useContext(PokemonContext)
  return (
    <WrapperModal>
      <Background></Background>
      <Modal>
        <ModalWrapper>
          <h4 className={css`text-align: center;`}>
            You must rename your pokemon:
          </h4>
          <FormInput onSubmit={(e) => handleChangeName(e, getPokemonDetail)}>
            <InputName 
              value={inputNamePokemon}
              onChange={(e) => setInputPokemon(e.target.value)}
            />
            <Button type="submit">
              Submit
            </Button>
          </FormInput>
        </ModalWrapper>
      </Modal>
    </WrapperModal>
  )
}