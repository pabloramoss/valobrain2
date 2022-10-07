import type {GetStaticProps, NextPage} from "next";

import Head from "next/head";

import {Hero} from "../components/sections/Hero";
import About from "../components/sections/Hero/About";
import api from "../utils/api";
import {MicroVideos} from "../types/videos";
import Layout from "../components/Layout/Layout";
import {Carousel} from "../components/sections/Carousel";

export interface Props {
  videos: MicroVideos[];
}

const Home: NextPage<Props> = ({videos}) => {
  return (
    <div>
      <Head>
        <title>Valobrain</title>
        <meta content="Valorant Strat App" name="Valobrain" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Layout>
        <Hero />
        <Carousel />
        <About />
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const videos = await api.list();

  return {
    props: {
      videos,
    },
  };
};

export default Home;
