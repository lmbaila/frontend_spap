import React from 'react';

 import { Container } from './styles';
interface Props {
  title?: string;
  orders?: number;
}
const PageTitle: React.FC<Props> = ({title, orders}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <label>{`${orders} contractos encontrados`}</label>
    </Container>
  );
}

export default PageTitle;