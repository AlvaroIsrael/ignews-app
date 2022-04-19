// Rendered everytime the app is loaded
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import GlobalStyle from '../styles/global';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default MyApp;
