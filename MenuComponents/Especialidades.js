import styles from "../styles/menu.module.css";

export default function Especialidades() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Especialidades A La Ninfa</h2>

      <h5>
        All plates served with quesi Flameado, Guacomole, Pico de Gallo, Mexican
        Rice and Charra Beans
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Jose's Mar y Tierra</h2>
          <p>Two grilled quail and three jumbo shrimp.</p>
          <h3>Reg. $23</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Quail a la Erika</h2>
          <p>Three grilled quail.</p>
          <h3>Reg. $24</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Estella's Granja y Mar</h2>
          <p>Two Acapulco shrimp, carnitas, and beef, and chicken fajitas.</p>
          <h3>Reg. $24</h3>
        </div>
      </div>
    </div>
  );
}
