import React, { useState, useEffect } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { CardContainer, ImageContainer, PriceContainer, VolumeContainer, VariationContainer, PriceSpan, VariationSpan, VolumeSpan, PriceTag, VolumeTag, PositiveVariationContainer, PositiveVariationSpan } from './styles';

const Card = (props) => {
  const imageLink = props.broadData.Product1Symbol.toLocaleLowerCase() || 'default-currency';
  const [image, setImage] = useState(imageLink);
  const [coinValue, setCoinValue] = useState('');
  const [coinVolume, setCoinVolume] = useState('');
  const [coinVariation, setCoinVariation] = useState('');
  const [isVariationNegative, setIsVariationNegative] = useState(false);
  const [cardId, setCardId] = useState('');
  const [coinSymbol, setCoinSymbol] = useState(props.broadData.Product1Symbol || '');

  const onError = () => setImage('default-currency');
  const negativeCheckRegex = /^\-.*$/;

  useEffect(() => {
    if (props.specificData && (props.specificData.InstrumentId === props.broadData.InstrumentId)) {
      setCoinValue(props.specificData.BestOffer);
      setCoinVolume(props.specificData.Rolling24HrVolume);
      setCardId(props.specificData.InstrumentId);
      setCoinVariation(props.specificData.Rolling24HrPxChange);
      setIsVariationNegative(negativeCheckRegex.exec(props.specificData.Rolling24HrPxChange));
    }
  }, [props.specificData]);

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  return (
    <div data-testid={`card-${cardId}`}>
      <CardContainer>
        <ImageContainer>
          <img onError={onError} alt='icon' src={`https://statics.foxbit.com.br/icons/colored/${image}.svg`} />
        </ImageContainer>

        {props.broadData.Symbol}
        {isVariationNegative ? (
          <VariationContainer>
            <VariationSpan>
              <BsArrowDown size='10'/>{coinVariation.toString().substring(1)}%
            </VariationSpan>
          </VariationContainer>
        ) : (
          <PositiveVariationContainer>
          <PositiveVariationSpan>
            <BsArrowUp size='10'/>{coinVariation}%
          </PositiveVariationSpan>
        </PositiveVariationContainer>
        )}

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
            {moneyFormatter.format(coinVolume).substring(3)} {coinSymbol}
          </VolumeSpan>
        </VolumeContainer>
      </CardContainer>
    </div>
  )
}

export default Card;