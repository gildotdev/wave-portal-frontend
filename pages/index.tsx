import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>🌊 Portal</title>
        <meta name="description" content="Wave Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the 🏘️👋🏾 Neighbor Wave Portal
        </h1>
      </main>

      <footer className={styles.footer}>Powered by{" 🦄"}</footer>
    </div>
  );
};

export default Home;
