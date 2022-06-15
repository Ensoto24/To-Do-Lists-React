import Head from "next/head";
import footer from "../components/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import mexico from "../public/mexico.png";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.heroImage}>
      <Image src={mexico} />
    </div>
  );
}
