import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(237, 239, 245);
  }
`;

export const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 176px);
  gap: 0.75rem;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 0 1 0%;
  overflow-y: auto;
  height: 100vh;
  padding: 20px 0.75rem;
`;

