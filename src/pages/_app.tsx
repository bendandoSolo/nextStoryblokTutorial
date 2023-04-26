import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';

import { storyblokInit, apiPlugin } from "@storyblok/react";
 
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Article from "../components/Article";
import AllArticles from '../components/AllArticles';

const components: Record<string, React.FC<any>> = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  article: Article,
  all_articles: AllArticles,
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
    