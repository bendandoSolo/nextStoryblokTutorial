import Head from "next/head"
//import styles from "../styles/global.css"
 
import {   getStoryblokApi, StoryblokComponent  } from "@storyblok/react"
 
export default function Home(props: any) {
  const story = props.story;

  return (
    <div >
      <Head>
        <title>Storyblok Tests </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1 className='text-center'>
            { story ? story.name : 'My Site' }
          </h1>
        </header>
 
      <main>
        
      </main>

      <StoryblokComponent blok={story.content} />
    </div>
  )
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