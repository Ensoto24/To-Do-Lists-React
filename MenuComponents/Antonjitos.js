import styles from "../styles/menu.module.css";

const Antonjitos = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Antonjitos</h2>
      </div>

      <div className={styles.itemHolder}>
        <div className={styles.menuDivider}>
          <div className={styles.menuItem}>
            <div className={styles.rectangle}></div>
            <h2>Queso Flameado</h2>
            <p>Melted jack cheese casserole with chorizo (Mexican Sausage).</p>
            <h3>Reg. $8, Lg. $11</h3>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.rectangle}></div>
            <h2>Fajita Queso</h2>
            <p>
              Melted jack cheese casserole with your choice beef or chicken
              fajita meat.
            </p>
            <h3>Reg. $9, Lg. $12</h3>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.rectangle}></div>
            <h2>Dos Camarones</h2>
            <p>
              Two jalapeños stuffed with large. Shrimp and jack cheese. Deep
              fried and served with ranch dressing.
            </p>
            <h3>Reg. $11</h3>
          </div>
        </div>
        <div className={styles.menuDivider}>
          <div className={styles.menuItem}>
            <div className={styles.rectangle}></div>
            <h2>Chile Con Queso</h2>
            <h3>Reg. $7, Lg. $10</h3>
            <p>Add Ground Beef.</p>
            <h3>Reg. $8, Lg. $11</h3>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.rectangle}></div>
            <h2>Ceviche</h2>
            <p>
              Seasoned shrimp, fish, scallops, onions, tomatoes, and jalapeños.
            </p>
            <h3>Reg. $11</h3>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.rectangle}></div>
            <h2>Fiesta Platter</h2>
            <p>
              A gigantic sampler platter: Pork ribs, jalapeños bullets, Chicken
              Flautas, Fajita Quesadillas, and Fajita Nachos. Served with
              guacamole, sour cream, pico de gallo, and chile con queso.
            </p>
            <h3>Reg. $16</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antonjitos;
