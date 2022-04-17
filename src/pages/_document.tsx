// Rendered only once the initial HTML document is loaded
// noinspection HtmlRequiredTitleElement

import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang='pt'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
