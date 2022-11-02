import React, { useState, useEffect } from 'react';
import { CardContainer, ImageContainer, PriceContainer, VolumeContainer, VariationContainer, PriceSpan, VariationSpan, VolumeSpan, PriceTag, VolumeTag } from './styles';

const Card = (props) => {
  const [image, setImage] = useState(props.broadData.Product1Symbol.toLocaleLowerCase());
  const [coinValue, setCoinValue] = useState('');
  const [coinVolume, setCoinVolume] = useState('');
  const [coinSymbol, setCoinSymbol] = useState(props.broadData.Product1Symbol);

  const onError = () => setImage('default-currency');

  useEffect(() => {
    if (props.specificData && (props.specificData.InstrumentId === props.broadData.InstrumentId)) {
      console.log('aaaaa', props.specificData.InstrumentId, props.broadData.InstrumentId)
      setCoinValue(props.specificData.BestOffer);
      setCoinVolume(props.specificData.Rolling24HrVolume);
    }
  }, [props.specificData]);

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img onError={onError} alt='icon' src={`https://statics.foxbit.com.br/icons/colored/${image}.svg`} />
        </ImageContainer>

        {props.broadData.Symbol}
        <VariationContainer>
          <VariationSpan>
          </VariationSpan>
        </VariationContainer>

        <PriceContainer>
            <PriceTag>
              R$
            </PriceTag>
          <PriceSpan>
            {moneyFormatter.format(coinValue).substring(3)}
          </PriceSpan>
        </PriceContainer>

        <VolumeContainer>
            <VolumeTag>
              Volume (24h): 
            </VolumeTag>
          <VolumeSpan>
            {coinVolume} {coinSymbol}
          </VolumeSpan>
        </VolumeContainer>
      </CardContainer>
    </>
  )
}

export default Card