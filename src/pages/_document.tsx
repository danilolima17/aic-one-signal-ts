import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
