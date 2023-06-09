import Head from "next/head"

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
 
import Layout from "../components/Layout";

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

      <Layout>
      <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}




type sbParamsType = {
  version: "draft" | "published" | undefined
};
 
export async function getServerSideProps(context: any) {
  // get the query object
  const insideStoryblok = context.query._storyblok;
 
  let slug = "home";
 
  let sbParams : sbParamsType = {
    version: "published", // or 'draft'
  };
 
  if (insideStoryblok) {
    sbParams.version = "draft";
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}

// export async function getStaticProps() {
//   // home is the default slug for the homepage in Storyblok
//   let slug = "home";
 
//   // load the draft version
//   let sbParams: sbParamsType = {
//     version: "draft", // or 'published'
//   };
 
//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//     revalidate: 3600, // revalidate every hour
//   };
// }