import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Hero } from './styles';

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Home | ig.news.app</title>
      </Head>
      <Container>
        <Hero>
          <span>👏🏻 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </Hero>
        <Image src='/images/avatar.svg' alt='avatar' width={336} height={521} />
      </Container>
    </>
  );
}
