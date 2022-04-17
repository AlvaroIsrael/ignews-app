// Rendered everytime the app is loaded
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
