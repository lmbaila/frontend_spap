import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const LeftSide = styled.div`
  background: var(--white);
  height: 100vh;
  @media (min-width: 768px) {
    width: 15%;
  }
`;

export const RightSide = styled.div`
  height: 100vh;
  @media (min-width: 768px) {
    width: 85%;
    background: #F5F6FD;
  }
`;