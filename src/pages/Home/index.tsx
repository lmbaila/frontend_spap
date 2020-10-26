import React from 'react';
import { Container,  LeftSide, RightSide} from './styles';
import ProviderData from '../../components/ProviderData';
import MenuBar from '../../components/MenuBar';
import {Main} from '../../components/Main/styles';
const Home: React.FC = () => {
    return (
      <Container>
        <Main>
          <LeftSide>
            <ProviderData
              providername = {'Maocha aguas'}
              avatarUrl = {'https://thiagoadami.files.wordpress.com/2015/01/una-gota-de-agua-23.jpg'}
            />
            <MenuBar />
          </LeftSide>
          <RightSide>

          </RightSide>
        </Main>
      </Container>
    );
}

export default Home;