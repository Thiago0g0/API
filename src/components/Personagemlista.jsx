import React from 'react';
import Cartao from './Personagemcartao';

function Personagem({ characters }) {
  return (
    <div className="lista">
      {characters.map((character) => (
        <Cartao key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Personagem;