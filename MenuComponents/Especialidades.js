import styles from "../styles/menu.module.css";

const Especialidades = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Especialidades A La Ninfa</h2>
      </div>

      <h5>
        All plates served with quesi Flameado, Guacomole, Pico de Gallo, Mexican
        Rice and Charra Beans
      </h5>

      <div className={styles.itemHolder}>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Jose's Mar y Tierra</h2>
          <p>Two grilled quail and three jumbo shrimp.</p>
          <h3>Reg. $23</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Quail a la Erika</h2>
          <p>Three grilled quail.</p>
          <h3>Reg. $24</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Estella's Granja y Mar</h2>
          <p>Two Acapulco shrimp, carnitas, and beef, and chicken fajitas.</p>
          <h3>Reg. $24</h3>
        </div>
      </div>
    </div>
  );
};

export default Especialidades;
