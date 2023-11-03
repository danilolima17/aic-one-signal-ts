import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    OneSignal.init({ appId: "29e98428-5021-42ae-9db1-decb6c4dd8bf" });
  })

  return <Component {...pageProps} />
}
