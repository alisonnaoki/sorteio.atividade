'use client'
import { useState } from 'react';
import Pagina from '../components/Pagina';
import { Button } from 'react-bootstrap';

const Sorteio = () => {
  const [numbers, setNumbers] = useState([]);

  const handleSorteio = () => {
    const newNumbers = [];
    for (let i = 0; i < 6; i++) {
      newNumbers.push(Math.floor(Math.random() * 61));
    }
    setNumbers(newNumbers);
  };

  return (
    <div>
    <>
    <Pagina titulo="Sorteio">
    </Pagina>
    </>
      <Button onClick={() => handleSorteio()}>Sortear</Button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>Número {index + 1}: {number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sorteio;