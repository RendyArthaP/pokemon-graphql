import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const WrapperSearchPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaQueries[1]} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SearchBoxPokemon = `
  border: 2px solid #CC0000;
  border-radius: 5px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Poppins', 'Sans-serif';
  font-size: 16px;
  outline: #FF0000;
  letter-spacing: 0.3px;
  ${mediaQueries[1]} {
    width: 100%;
  }
`;