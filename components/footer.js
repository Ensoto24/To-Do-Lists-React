import styles from "../styles/footer.module.css";
import Image from "next/image";
import ninfasMap from "../public/ninfas_map.png";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerContact}>
        <h2>The Original Mexican Restaurant</h2>
        <p>
          5730 Hwy 6<br />
          Missouri City, TX 77459
          <br />
          Tel: 281-499-5070
        </p>
      </div>
      <div className={styles.footerMap}>
        <a
          href="https://www.google.com/maps/place/Ninfa's/@29.5702389,-95.5714415,17z/data=!3m1!4b1!4m5!3m4!1s0x8640e5fa5bce4469:0x5ef929721c8db434!8m2!3d29.5702407!4d-95.5692502"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Image
            src={ninfasMap}
            alt="mama ninfas map location"
            width={600}
            height={350}
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Footer;
