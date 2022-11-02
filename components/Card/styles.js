import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-variant: common-ligatures tabular-nums;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  opacity: 1;
  overflow: initial;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(18 18 18 / 2%) 0px 24px 60px 0px, rgb(18 18 18 / 4%) 0px 0px 40px 0px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 0.25rem;
  display: flex;

  img {
    width: 28px;
    aspect-ratio: auto 28 / 28;
    height: 28px;
  }
`;

export const PriceContainer = styled.div`
  margin-bottom: 0.25rem;
  display: block;
`;

export const PriceTag = styled.span`
  color: rgb(183, 184, 190);
  font-family: gilroymedium;
  font-weight: 500;
  font-size: 1.25rem;
  margin-right: 0.25rem;
`;

export const PriceSpan = styled.span`
  color: rgb(29, 29, 33);
  font-family: gilroymedium;
  font-weight: 500;
  font-size: 1.25rem;
`;

export const VariationContainer = styled.div`
  
`;

export const VariationSpan = styled.span`
  
`;

export const VolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
`;

export const VolumeTag = styled.span`
  color: rgb(111, 112, 117);
  font-family: gilroymedium;
  font-weight: 500;
  font-size: 0.65rem;
  line-height: 1;
`;

export const VolumeSpan = styled.span`
  color: rgb(29, 29, 33);
  font-family: gilroymedium;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  margin-top: 0.25rem;
`;
