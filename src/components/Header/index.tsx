import React from 'react';

 import { Container, Logo,  SearchForm} from './styles';

const Header: React.FC = () => {
  return (
     <Container>
       <Logo />
       <SearchForm>
         <input placeholder = "Procurar..."/>
      </SearchForm>
     </Container>
  );
}

export default Header;