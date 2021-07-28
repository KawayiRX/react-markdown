import React from 'react';
import {
  Container, Loading, Wrapper, Item,
} from './styled';

const LoadingPage: React.FC = () => (
  <Container>
    <Loading>
      <Wrapper>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Wrapper>
    </Loading>
  </Container>
);

export default LoadingPage;
