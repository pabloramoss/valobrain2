import type {NextPage} from "next";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import {Carousel} from "../components/sections/Carousel";
import {Sidebar} from "../components/sections/Sidebar";
import {Hero} from "../components/sections/Hero";
import {Maps} from "../components/Maps";

const MicroStrats: NextPage = () => {
  return (
    <div className={styles.container}>
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
        }}
      >
        <div style={{display: "flex"}}>
          {/* <Sidebar /> */}
          <div style={{width: "700px", display: "wrap"}}>
            <Maps />
          </div>
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

export default MicroStrats;
