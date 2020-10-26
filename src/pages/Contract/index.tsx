import React from 'react';

 import { Container } from './styles';
import PageTitle from '../../components/PageTitle';

import {  LeftSide, RightSide} from './../../../src/components/Layout/styles';
import ProviderData from '../../components/ProviderData';
import MenuBar from '../../components/MenuBar';
import {Main} from '../../components/Main/styles';
const Contract: React.FC = () => {
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
          <PageTitle title = {"Contractos"} orders = {12}/>
        </RightSide>
      </Main>
     
    </Container>
  )
}

export default Contract;