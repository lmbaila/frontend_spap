import React from 'react';
import {Link} from 'react-router-dom';
import { Container, MenuButton, AnaliticIcon, Employer, Calendar, Contract, Profile, Seeting} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Link  to={"/Contract"}>
        <MenuButton>
            <Contract />
            <span>Contratos</span>
        </MenuButton>
      </Link>
      <MenuButton>
          <Employer />
          <span>Funcionarios</span>
      </MenuButton>
      <MenuButton>
          <Calendar />
          <span>Abertura do Mes</span>
      </MenuButton>
      <MenuButton>
          <AnaliticIcon />
          <span>Spap Relatorios</span>
      </MenuButton>
      <MenuButton>
          <Seeting />
          <span>Definicoes</span>
      </MenuButton>
      <MenuButton>
          <Profile />
          <span>Perfil</span>
      </MenuButton>
    </Container>
  )
}

export default MenuBar;