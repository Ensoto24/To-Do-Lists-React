import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div id="about-us" className={styles.aboutMain}>
      <div className={styles.aboutText}>
        <p>
          Every Day we continue a{" "}
          <span className={styles.aboutUnderline}>wonderful tradition</span>
          by serving you and your family with the{" "}
          <span className={styles.aboutUnderline}>
            same affection and quality
          </span>{" "}
          that our founder,{" "}
          <span className={styles.aboutUnderline}>
            Maria Ninfa Rodriquez Laurenzo,
          </span>
          established in 1973.
        </p>
      </div>
      <div className={styles.aboutLine}>
        <img src="line.svg" />
      </div>
      <div className={styles.aboutText}>
        <p>
          Known to everyone as “Mama”,{" "}
          <span className={styles.aboutUnderline}>
            her legacy began in a small 10-table restaurant on Navigation.
          </span>{" "}
          Using her own pots and pans,{" "}
          <span className={styles.aboutUnderline}>
            she created this world-renowned tradition
          </span>{" "}
          of serving great food and delicious Margaritas.
        </p>
      </div>
    </div>
  );
};

export default About;
