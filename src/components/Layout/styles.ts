import styled from 'styled-components';

export const Container = styled.div`
  background: var(--black);
`;
export const Wrapper = styled.div`
  height: 100px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
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
    padding-top: 20px;
    padding-left: 20px;
    //principio da universalidade e igualidade artigo 35
  } 
`;
