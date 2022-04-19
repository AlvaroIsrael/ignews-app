import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { Avatar, Container, Hero, Copyright } from '../styles/Home/styles';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

type HomeProps = {
  product: {
    priceId: string;
    amount: string;
  };
  currentYear: number;
};

export default function Home({ product, currentYear }: HomeProps): ReactElement {
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
            for <span>{product.amount}</span> month
          </p>
          <SubscribeButton priceId={product.priceId} />
        </Hero>
        <Avatar>
          <Image src='/images/avatar.svg' alt='avatar' layout='fill' priority />
        </Avatar>
      </Container>
      <Copyright>
        ❤️&nbsp;
        <a href='https://github.com/AlvaroIsrael/ignews-app'>
          <strong>Álvaro Israel Nunes Leite</strong>
        </a>
        &nbsp;&copy; {currentYear}
      </Copyright>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<{ props: HomeProps; revalidate: number }> => {
  const currentYear = new Date().getFullYear();
  const price = await stripe.prices.retrieve(process.env.STRIPE_PRICE_ID || '', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price.unit_amount || 0) / 100), // cents to dollars
  };

  return {
    props: {
      product,
      currentYear,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
