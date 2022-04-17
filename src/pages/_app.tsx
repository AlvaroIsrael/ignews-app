// Rendered everytime the app is loaded
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { Header } from './components/Haeder';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
