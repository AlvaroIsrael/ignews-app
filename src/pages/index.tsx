import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Avatar, Container, Hero } from './styles';
import { SubscribeButton } from '../components/SubscribeButton';

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
          <SubscribeButton />
        </Hero>
        <Avatar>
          <Image src='/images/avatar.svg' alt='avatar' layout='fill' priority />
        </Avatar>
      </Container>
    </>
  );
}
