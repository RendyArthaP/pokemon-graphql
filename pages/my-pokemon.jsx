import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { HomeContent, HomeWrapper } from '../styled/pages/Home';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { css } from '@emotion/css';
import PokemonCardCollection from '../components/PokemonCardCollection';
import { CardPokemonWrapper } from '../styled/components/PokemonCard';

export default function MyPokemon() {
  const { myPokemon } = useContext(PokemonContext);
  return (
    <Layout>
      <NextSeo 
        title={'My Pokemon'}
        description={'My Pokemon Collection'}
      />
      <HomeWrapper>
        <HomeContent>
          <h1>
            My Pokemon List
          </h1>
          {myPokemon === null && []
            ?
              <h1 className={css`
                display: flex;
                height: 33vw;
                justify-content: center;
                align-items: center;
                color: #FF7B7B;
              `}>
                You don't have Pokemon Card Collection
              </h1>
            :
              <CardPokemonWrapper>
                {myPokemon.map((poke, index) => (
                  <PokemonCardCollection 
                    poke = {poke} 
                    index = {index}
                    key = {index}
                  />
                ))}
              </CardPokemonWrapper>
          }
        </HomeContent>
      </HomeWrapper>
    </Layout>
  );
};