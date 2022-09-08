import type {NextPage} from "next";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import {Carousel} from "../components/sections/Carousel";
import {Sidebar} from "../components/sections/Sidebar";
import {Navbar} from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valobrain</title>
        <meta content="Valorant Strat App" name="Valobrain" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main style={{display: "flex", flexDirection: "column"}}>
        <Navbar />
        <div style={{display: "flex"}}>
          <Sidebar />
          <Carousel />
        </div>
        {/* <MainContent>
          <Hero />
          <CarouselMaps />
          <CarouselVideos />
        </MainContent> */}
      </main>
    </div>
  );
};

export default Home;
