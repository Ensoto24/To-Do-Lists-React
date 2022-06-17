import Head from "next/head";
import footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import mexico from "../public/mexico.png";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <><div className={styles.heroImage}>
      <Image src={mexico} width={1440} height={733} />
    </div>
    <div className={styles.aboutMain}>
      <div className={styles.aboutText}>
        <p>Every Day we continue a <span className={styles.aboutUnderline}>wonderful tradition</span>
          by serving you and your family with the <span className={styles.aboutUnderline}>same affection
          and quality</span> that our founder, <span className={styles.aboutUnderline}>Maria Ninfa Rodriquez Laurenzo,</span>
          established in 1973.
        </p>
        <p>
          Known to everyone as “Mama”, <span className={styles.aboutUnderline}>her legacy began in a small
          10-table restaurant on Navigation.</span> Using her own pots and
          pans, <span className={styles.aboutUnderline}>she created this world-renowned tradition</span> of serving
           great food and delicious Margaritas.
        </p>
      </div>
      </div>
      </>
  );
}
