// Rendered everytime the app is loaded
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import GlobalStyle from '../styles/global';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    hotjar.initialize(2934389, 1);
  }, []);
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default MyApp;
