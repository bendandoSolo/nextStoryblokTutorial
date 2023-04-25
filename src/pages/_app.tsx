import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { storyblokInit, apiPlugin } from "@storyblok/react";
 
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};



storyblokInit({
  accessToken: "bGysD1GjYECAg9rzCf7pegtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
    