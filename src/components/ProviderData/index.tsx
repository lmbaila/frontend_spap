import React from 'react';

 import { Container, Avatar } from './styles';
interface Props {
  providername: string,
  avatarUrl?: string;
}

const ProviderData: React.FC<Props> = ({providername, avatarUrl}) => {
  return (
    <Container> 
          <Avatar src = {avatarUrl}  alt={"avatar"}/>
          <h1>{providername}</h1>
    </Container>
  );
}

export default ProviderData;