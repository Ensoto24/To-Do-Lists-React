import About from "../components/About";
import Hours from "../components/Hours";
import HomeMenu from "../components/HomeMenu";
import styles from "../styles/home.module.css";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <div className={styles.heroImage}></div>
      <Hero />
      <About />
      <Hours />
      <HomeMenu />
    </>
  );
}
