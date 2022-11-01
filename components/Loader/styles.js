import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  font-size: 24px;
  text-transform: uppercase;
`;

const PristineStyle = styled.div`
  color: #0099e5;
`;

export const LoadingStyle = styled.div`
  cursor: progress;
  border: 16px solid #5a5858;
  border-top: 16px solid #f46085;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;