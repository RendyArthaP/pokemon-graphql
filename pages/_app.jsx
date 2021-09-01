import '../styled/global.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';
import PokemonProvider from '../context/PokemonContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="../../PokemonIcon.ico"/>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="../../PokemonIcon.ico"/>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
    
      <ApolloProvider client={client}>
        <PokemonProvider>
          <Component {...pageProps} />
        </PokemonProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp
