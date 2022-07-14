import About from "../components/About";
import Hours from "../components/Hours";
import HomeMenu from "../components/HomeMenu";
import styles from "../styles/home.module.css";
import Hero from "../components/Hero";
import HeroSlide from "../components/HeroSlide";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSlide />
      <About />
      <Hours />
      <HomeMenu />
    </>
  );
}
