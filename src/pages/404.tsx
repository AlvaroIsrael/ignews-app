import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, NotFound } from '../styles/404/styles';

export default function Custom404(): ReactElement {
  return (
    <Container>
      <NotFound>
        <Image src='/images/monkey.webp' alt='not found monkey' layout='fill' />
      </NotFound>
      <h1>404 - Página não encontrada</h1>
      <Link href='/' passHref>
        <Button>Voltar para home</Button>
      </Link>
    </Container>
  );
}
