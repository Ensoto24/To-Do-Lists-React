import Head from "next/head";
import footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import line from "../public/line.svg";
import About from "../components/About";
import mexico from "../public/mexico.png";
import Hours from "../components/Hours";
import HomeMenu from "../components/HomeMenu";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image src={mexico} width={1440} height={733} />
      </div>
      <About />
      <Hours />
      <HomeMenu />
    </>
  );
}
