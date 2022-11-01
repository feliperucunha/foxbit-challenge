import React from 'react';
import CardContainer from './styles';

const Card = (data) => {

  return (
    <>
      <CardContainer>
        {data.Symbol}
      </CardContainer>
    </>
  )
}

export default Card