import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div id="about-us" className={styles.aboutMain}>
      <div className={styles.aboutText}>
        <motion.p
          initial={{ opacity: 0, y: 256 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.01 }}
        >
          Every Day we continue a{" "}
          <span className={styles.aboutUnderline}>wonderful tradition</span> by
          serving you and your family with the{" "}
          <span className={styles.aboutUnderline}>
            same affection and quality
          </span>{" "}
          that our founder,{" "}
          <span className={styles.aboutUnderline}>
            Maria Ninfa Rodriquez Laurenzo,
          </span>
          established in 1973.
        </motion.p>
      </div>
      <div className={styles.aboutLine}>
        <img src="line.svg" />
      </div>
      <div className={styles.aboutText}>
        <motion.p
          initial={{ opacity: 0, y: 256 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.01 }}
        >
          Known to everyone as “Mama”,{" "}
          <span className={styles.aboutUnderline}>
            her legacy began in a small 10-table restaurant on Navigation.
          </span>{" "}
          Using her own pots and pans,{" "}
          <span className={styles.aboutUnderline}>
            she created this world-renowned tradition
          </span>{" "}
          of serving great food and delicious Margaritas.
        </motion.p>
      </div>
    </div>
  );
}
