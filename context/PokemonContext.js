import { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [namePokemon, setNamePokemon] = useState('');
  const [getPokemon, setGetPokemon] = useState();
  const [getPokemonDetail, setGetPokemonDetail] = useState();
  const [fetchData, setFetchData] = useState(6);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertFailed, setShowAlertFailed] = useState(false);
  const [showModalRename, setShowModalRename] = useState(false);
  const [inputNamePokemon, setInputPokemon] = useState('');
  const [searchPokemon, setSearchPokemon] = useState('');
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    setMyPokemon(JSON.parse(localStorage.getItem('list-my-pokemon')));
  }, []);

  const handleChangeName = (e, pokemons) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem('list-my-pokemon'));
    const newNamePokemon = {
      changeName: inputNamePokemon
    };
    if(!data) {
      let temporaryData = [];
      localStorage.setItem('list-my-pokemon', JSON.stringify(temporaryData));
      data = JSON.parse(localStorage.getItem('list-my-pokemon'));
    };
    setMyPokemon([...data, {pokemons, newNamePokemon}]);
    localStorage.setItem('list-my-pokemon', JSON.stringify([...data, {pokemons, newNamePokemon}]));
    setShowModalRename(false);
  };
  
  const handleCatchPokemon = (pokemon) => {
    const maxNumber = 9;
    const order = getPokemonDetail.pokemon.order;
    const possibilityCatch = Math.floor(Math.random() * maxNumber);
    const resultCatch = Math.floor((order / possibilityCatch) * 10);

      if(resultCatch % 2 === 0) {
        setShowAlertSuccess(true);
        setTimeout(() => {
          setShowAlertSuccess(false);
          setShowModalRename(true);
        }, 2000);
      } else {
        setShowAlertFailed(true);
        setTimeout(() => {
          setShowAlertFailed(false);
        }, 2000);
      };
  };

  const deleteMyPokemon = (pokemon, idPokemon) => {
    let filteredMyPokemon = myPokemon.filter((poke, indexPokemon) => {
      return indexPokemon !== idPokemon;
    });
    setMyPokemon(filteredMyPokemon);
    localStorage.setItem('list-my-pokemon', JSON.stringify(filteredMyPokemon));
  };

  return (
    <PokemonContext.Provider value={{ 
      getPokemon,
      namePokemon,
      getPokemonDetail,
      setNamePokemon,
      setGetPokemon,
      setGetPokemonDetail,
      fetchData,
      setFetchData,
      showAlertSuccess,
      setShowAlertSuccess,
      showAlertFailed,
      setShowAlertFailed,
      handleCatchPokemon,
      myPokemon,
      setMyPokemon,
      showNavMobile,
      setShowNavMobile,
      showModalRename,
      setShowModalRename,
      inputNamePokemon,
      setInputPokemon,
      handleChangeName,
      deleteMyPokemon,
      searchPokemon,
      setSearchPokemon,
    }}
    >
      { children }
    </PokemonContext.Provider>
  );
};