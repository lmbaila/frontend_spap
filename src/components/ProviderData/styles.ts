import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  flex-direction:row;
  align-items: center;
  display: flex;
  justify-items: center;
 // background: var(--black);
  >h1 {
    display: none
  }

  @media(min-width: 1280px) {
    >h1 {
      display: inline;
      margin-left: 10px;
      font-size: 14px;
      color: var(--username);
      font-weight: 600;
    }
  }


`;

export const Avatar = styled.img`
   width: 50px;
   border-radius: 10%;

`;
