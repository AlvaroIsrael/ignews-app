import { ReactElement } from 'react';
import Image from 'next/image';
import { Container, Content, MenuLink } from './styles';

export function Header(): ReactElement {
  return (
    <Container>
      <Content>
        <Image src='/images/logo.svg' height={31} width={110} alt='ig.news' />
        <nav>
          <MenuLink active>Home</MenuLink>
          <MenuLink>Posts</MenuLink>
        </nav>
      </Content>
    </Container>
  );
}
