import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: "JqynnGEuwXQVlAQgcosJigtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
    