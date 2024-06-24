import React from 'react';

function Cartao({ character }) {
  return (
    <div className="cartao">
      <img src={character.image} alt={character.name} className='ft'/>
      <div className='info'>
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Espécie: {character.species}</p>
      </div>
    </div>
  );
}

export default Cartao;