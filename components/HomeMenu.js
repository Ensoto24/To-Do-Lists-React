import styles from "../styles/homeMenu.module.css";
import Image from "next/image";
import burritos from "../public/burritos.png";
import queso from "../public/queso.png";
import nachos from "../public/nachos.png";
import onetaco from "../public/onetaco.png";
import quesadillas from "../public/quesadillas.png";
import tejascombo from "../public/tejascombo.png";
import guac from "../public/guac.png";

export default function homeMenu() {
  return (
    <div className={styles.homeMenuMain}>
      <div className={styles.container}>
        <div className={styles.homeitem}>
          <div className={styles.homeMenuImage}>
            <Image src={queso} alt="Ninfa's" width={378.67} height={253.38} />
          </div>
          <div className={styles.homeMenuDesc}>
            <p>Chile Con Queso</p>
          </div>
        </div>
        <div className={styles.homeitem}>
          <div className={styles.homeMenuImage}>
            <Image
              src={quesadillas}
              alt="Ninfa's"
              width={378.67}
              height={253.38}
            />
          </div>
          <div className={styles.homeMenuDesc}>
            <p>Quesadillas</p>
          </div>
        </div>
        <div className={styles.homeitem}>
          <div className={styles.homeMenuImage}>
            <Image
              src={tejascombo}
              alt="Ninfa's"
              width={378.67}
              height={253.38}
            />
          </div>
          <div className={styles.homeMenuDesc}>
            <p>Tejas Combo</p>
          </div>
        </div>
        <div className={styles.homeitem}>
          <div className={styles.homeMenuImage}>
            <Image src={onetaco} alt="Ninfa's" width={378.67} height={253.38} />
          </div>
          <div className={styles.homeMenuDesc}>
            <p>One Taco A La Ninfa</p>
          </div>
        </div>
        <div className={styles.homeitem}>
          <div className={styles.homeMenuImage}>
            <Image src={guac} alt="Ninfa's" width={378.67} height={253.38} />
          </div>
          <div className={styles.homeMenuDesc}>
            <p>Guacamole</p>
          </div>
        </div>
        <div className={styles.homeitem}>
          <div className={styles.homeMenuImage}>
            <Image src={nachos} alt="Ninfa's" width={378.67} height={253.38} />
          </div>
          <div className={styles.homeMenuDesc}>
            <p>Nachos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
