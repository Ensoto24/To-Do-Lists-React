import Plyr from "plyr-react";
import styles from "../styles/hero.module.css";
import Button from "./Button";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1>The Original Mexican Restaurant</h1>
        <Button
          href={"https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"}
        >
          Order Now
        </Button>
      </div>

      <div className={styles.backgroundContainer}>
        <div className={styles.background}>
          <Plyr
            options={{
              autoplay: true,
              clickToPlay: false,
              controls: [],
              fullscreen: {
                enabled: false,
              },
              loop: { active: true },
              muted: true,
              quality: {
                default: 480,
                options: [720, 480],
              },
              settings: [],
              volume: 0,
              youtube: {
                noCookie: true,
              },
            }}
            source={{
              sources: [
                {
                  src: "https://www.youtube.com/watch?v=I_6ZcOo6pnk",
                  provider: "youtube",
                },
              ],
              type: "video",
            }}
          />
        </div>
      </div>
    </section>
  );
}
