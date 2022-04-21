// Rendered only once the initial HTML document is loaded
// noinspection HtmlRequiredTitleElement

import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

type DocumentProps = DocumentInitialProps & {
  styles: ReactElement[];
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...(initialProps.styles as ReactElement[]), ...sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang='pt'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap' rel='stylesheet' />
          <link rel='shortcut icon' href='/favicon.png' type='image/png' />
          <meta name='description' content='Get access to all the news about the React world.' />
          <meta name='keywords' content='news, react' />
          <meta name='author' content='Alvaro Israel Nunes Leite' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
