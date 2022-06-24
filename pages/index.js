import About from "../components/About";
import Hours from "../components/Hours";
import HomeMenu from "../components/HomeMenu";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heroImage}></div>
      <About />
      <Hours />
      <HomeMenu />
    </>
  );
}
