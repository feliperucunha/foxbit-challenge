/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Image from 'next/image';
import { CardContainer, ImageContainer, PriceContainer, VolumeContainer, VariationContainer, PriceSpan, VariationSpan, VolumeSpan, PriceTag, VolumeTag } from './styles';
import { imagesFallback, imagesFirstLink, imagesSecondLink } from '../../constants';

const Card = (props) => {
  const imageLink = props.broadData.Product1Symbol.toLocaleLowerCase() || imagesFallback;
  const [image, setImage] = useState(imageLink);
  const [coinValue, setCoinValue] = useState('--');
  const [coinVolume, setCoinVolume] = useState('-- --');
  const [coinVariation, setCoinVariation] = useState('--');
  const [isVariationNegative, setIsVariationNegative] = useState(false);
  const [cardId, setCardId] = useState('');
  const [coinSymbol, setCoinSymbol] = useState(props.broadData.Product1Symbol || '');

  const onError = () => setImage(imagesFallback);
  const negativeCheckRegex = /^\-.*$/;
  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 4,
  });

  useEffect(() => {
    if (props.specificData && (props.specificData.InstrumentId === props.broadData.InstrumentId)) {
      setCoinValue(moneyFormatter.format(props.specificData.LastTradedPx).substring(3));
      setCoinVolume(moneyFormatter.format(props.specificData.Rolling24HrVolume).substring(3));
      setCardId(props.specificData.InstrumentId);
      setCoinVariation(props.specificData.Rolling24HrPxChange);
      setIsVariationNegative(negativeCheckRegex.exec(props.specificData.Rolling24HrPxChange));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.specificData]);

  return (
    <div data-testid={`card-${cardId}`}>
      <CardContainer>
        <ImageContainer>
          <img onError={onError} alt='icon' src={`${imagesFirstLink}${image}${imagesSecondLink}`} />
        </ImageContainer>

        {props.broadData.Symbol}
        {isVariationNegative ? (
          <VariationContainer color={'rgb(252, 237, 237)'}>
            <VariationSpan color={'rgb(92, 48, 48)'}>
              <BsArrowDown size='10'/>{coinVariation.toString().substring(1)}%
            </VariationSpan>
          </VariationContainer>
        ) : (
          <VariationContainer color={'rgb(235, 250, 244)'}>
          <VariationSpan color={'rgb(33, 71, 57)'}>
            <BsArrowUp size='10'/>{coinVariation}%
          </VariationSpan>
        </VariationContainer>
        )}

        <PriceContainer>
            <PriceTag>
              R$
            </PriceTag>
          <PriceSpan>
            {coinValue}
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
    </div>
  )
}

export default Card;