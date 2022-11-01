import styled from 'styled-components';

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 176px);
  row-gap: 0.75rem;
  column-gap: 0.75rem;
  -webkit-box-pack: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0%;
  overflow-y: auto;
  height: 100vh;
  padding-top: 20px;
  padding-right: 0.75rem;
`;

export default CardGrid;
