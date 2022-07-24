import Head from "next/head";
import About from "../components/About";
import Hours from "../components/Hours";
import HomeMenu from "../components/HomeMenu";
import styles from "../styles/home.module.css";
import Hero from "../components/Hero";
import HeroSlide from "../components/HeroSlide";
import meta from "../content/meta.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {meta.title}
          <meta name="description" content={meta.description} />
        </title>
      </Head>
      {/* <Hero /> */}
      <HeroSlide />
      <About />
      <Hours />
      <HomeMenu />
    </>
  );
}
