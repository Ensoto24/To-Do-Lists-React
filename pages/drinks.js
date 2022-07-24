import Head from "next/head";
import styles from "../styles/menu.module.css";
import meta from "../content/meta.json";

import Drinks from "../MenuComponents/Drinks";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Head>
        <title>Drinks | {meta.title}</title>
      </Head>
      <Drinks />
    </div>
  );
}
