import React from 'react';
import { useAppContext } from '../../context';

const Card = () => {
  const { cryptoData } = useAppContext();

  return (
    <div>Card

    {console.log(cryptoData, 'card component  ')}
    </div>
  )
}

export default Card