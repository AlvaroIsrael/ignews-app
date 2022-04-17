import { ReactElement } from 'react';
import Image from 'next/image';
import { Container, Content, Logo, MenuLink } from './styles';
import { SignInButton } from '../SignInButton';

export function Header(): ReactElement {
  return (
    <Container>
      <Content>
        <Logo>
          <Image src='/images/logo.svg' alt='ig.news' layout='fill' />
        </Logo>
        <nav>
          <MenuLink active>Home</MenuLink>
          <MenuLink>Posts</MenuLink>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  );
}
