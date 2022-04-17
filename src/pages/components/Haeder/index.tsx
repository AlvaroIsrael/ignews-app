import { ReactElement } from 'react';
import Image from 'next/image';
import { Container, Content } from './styles';

export function Header(): ReactElement {
  return (
    <Container>
      <Content>
        <Image src='/images/logo.svg' height={31} width={110} alt='ig.news' />
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>
      </Content>
    </Container>
  );
}
