import styles from "../styles/homeMenu.module.css";
import Image from "next/image";
import burritos from "../public/burritos.png";

const homeMenu = () => {
  return (
    <div className={styles.homeMenuMain}>
      <div className={styles.homeMenuItem}>
        <div className={styles.homeMenuImage}>
          <Image src={burritos} alt="Ninfa's" width={378.67} height={253.38} />
        </div>
        <div className={styles.homeMenuDesc}>
          <p>La Zona Rosa</p>
        </div>
      </div>
      <div className={styles.homeMenuItem}>
        <div className={styles.homeMenuImage}>
          <Image src={burritos} alt="Ninfa's" width={378.67} height={253.38} />
        </div>
        <div className={styles.homeMenuDesc}>
          <p>La Zona Rosa</p>
        </div>
      </div>
      <div className={styles.homeMenuItem}>
        <div className={styles.homeMenuImage}>
          <Image src={burritos} alt="Ninfa's" width={378.67} height={253.38} />
        </div>
        <div className={styles.homeMenuDesc}>
          <p>La Zona Rosa</p>
        </div>
      </div>
      <div className={styles.homeMenuItem}>
        <div className={styles.homeMenuImage}>
          <Image src={burritos} alt="Ninfa's" width={378.67} height={253.38} />
        </div>
        <div className={styles.homeMenuDesc}>
          <p>La Zona Rosa</p>
        </div>
      </div>
    </div>
  );
};

export default homeMenu;
