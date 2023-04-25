import Head from "next/head"

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
 
export default function Home({ story }: any): JSX.Element {
  story = useStoryblokState(story);
 
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>
 
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

type sbParamsType = {
  version: "draft" | "published" | undefined
};
 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams: sbParamsType = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}