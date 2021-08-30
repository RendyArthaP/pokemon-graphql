import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import PokemonProvider from '../../context/PokemonContext';
import PokemonDetail from '../../components/PokemonDetail';
import { HomeContent, HomeWrapper } from '../../styled/pages/Home';

export default function PokemonDetails() {
  const router = useRouter();
  let { name } = router.query;

  return (
    <Layout>
      <NextSeo 
        title={!!name && name.toString().charAt(0).toUpperCase() + name.slice(1)}
      />
      <HomeWrapper>
        <HomeContent>
          <PokemonProvider>
            <PokemonDetail name={name}/>
          </PokemonProvider>
        </HomeContent>
      </HomeWrapper>
    </Layout>
  );
};
