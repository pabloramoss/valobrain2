import type {NextPage} from "next";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import {Navbar} from "../components/Navbar";
import {Flowchart} from "../components/Flowchart";

const FlowChart: NextPage = () => {
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
          height: "100vh",
          width: "100vw",
        }}
      >
        <Flowchart />
      </main>
    </div>
  );
};

export default FlowChart;
