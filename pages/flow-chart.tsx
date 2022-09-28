import type {NextPage} from "next";

import Head from "next/head";
import React, {useRef, useState} from "react";

import styles from "../styles/Home.module.css";
import {Flowchart} from "../components/Flowchart";

const FlowChart: NextPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const ref = useRef(null);
  const refButton = useRef(null);

  const persona = "agustin";

  interface Product {
    id: string;
    title: string;
    price: number;
  }

  const MiProduct = {
    id: "1",
    title: "razer mini",
    price: 35,
  };

  console.log(MiProduct.title);

  const hola = (persona: string) => {
    return persona;
  };

  const handleEdit = (event: React.MouseEvent<any>) => {
    console.log("aluco", event.currentTarget);
    // if (event.currentTarget.id === "buttoncito") {
    //   console.log("if");
    //   setIsEditable(false);
    // } else {
    //   console.log("else");

    //   setIsEditable(true);
    //   //@ts-ignore
    //   ref.current.focus();
    // }
  };

  const handleOnBlur = () => {
    setIsEditable(false);
  };

  return (
    <div>
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
          <div>
            <h3>isEditable {JSON.stringify(isEditable)}</h3>
            <input
              ref={ref}
              placeholder="apretame"
              readOnly={!isEditable}
              onBlur={handleOnBlur}
              onClick={handleEdit}
            />
            <button ref={refButton} id="buttoncito" onClick={() => setIsEditable(!isEditable)}>
              hola
            </button>
          </div>
          <Flowchart />
        </main>
      </div>
    </div>
  );
};

export default FlowChart;
