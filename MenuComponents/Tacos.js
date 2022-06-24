import styles from "../styles/menu.module.css";

const Tacos = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Tacos A La Ninfas</h2>
      </div>

      <h5>
        Beef of Chicken Fajita Tacos Served with Mexican Rice, Charra Beans,
        Pico de Gallo, Guacamole, and Chile Con Queso.
      </h5>

      <div className={styles.itemHolder}>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Two Taco A La Ninfa Chicken</h2>

          <h3>Reg. $15</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>One Taco A La Ninfa Chicken</h2>

          <h3>Reg. $12</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Two Taco A La Ninfa Beef</h2>

          <h3>Reg. $16</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>One Taco A La Ninfa Beef</h2>

          <h3>Reg. $13</h3>
        </div>
      </div>
    </div>
  );
};

export default Tacos;
