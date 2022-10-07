import type {NextPage} from "next";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import {Maps} from "../components/Maps";
import Layout from "../components/Layout/Layout";

const MicroStrats: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valobrain</title>
        <meta content="Valorant Strat App" name="Valobrain" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout>
        <Maps />
      </Layout>
    </div>
  );
};

export default MicroStrats;
