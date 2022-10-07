import type {GetStaticProps, NextPage} from "next";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import {Carousel} from "../components/sections/Carousel";
import {Sidebar} from "../components/sections/Sidebar";
import {Hero} from "../components/sections/Hero";
import About from "../components/sections/Hero/About";
import api from "../utils/api";
import {MicroVideos} from "../types/videos";

export interface Props {
  videos: MicroVideos[];
}

const Home: NextPage<Props> = ({videos}) => {
  console.log(videos);

  return (
    <div>
      <Head>
        <title>Valobrain</title>
        <meta content="Valorant Strat App" name="Valobrain" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#2D3748",
          height: "100vh",
        }}
      >
        <div style={{display: "flex"}}>
          <Sidebar />
          <div style={{maxWidth: "700px"}}>
            <Hero />
            <Carousel />
            <About />
          </div>
        </div>
      </main>
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
