import type {NextPage} from "next";

import Head from "next/head";

import Sidebar from "../components/sections/Sidebar/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valobrain</title>
        <meta content="Valorant Strat App" name="Valobrain" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        {/* <Navbar /> */}
        <Sidebar />
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
