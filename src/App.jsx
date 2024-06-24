import React, { useState } from 'react';
import Busca from './components/Busca';
import Personagem from './components/Personagemlista';
import  './App.css'

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = async (name) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div >
      <header className='pesquisa'>
      <h1>Rick and Morty Character Search</h1>
      <Busca onSearch={fetchCharacters} className="search"/>
      </header>
      <div className='pers'>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Personagem characters={characters} />
      )}
      </div>
    </div>
  );
}

export default App;