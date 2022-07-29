import styles from "../styles/menu.module.css";

export default function Tacos() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Tacos A La Ninfas</h2>

      <h5>
        Beef of Chicken Fajita Tacos Served with Mexican Rice, Charra Beans,
        Pico de Gallo, Guacamole, and Chile Con Queso.
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Two Taco A La Ninfa Chicken</h2>

          <h3>Reg. $17</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>One Taco A La Ninfa Chicken</h2>

          <h3>Reg. $14</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Two Taco A La Ninfa Beef</h2>

          <h3>Reg. $18</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>One Taco A La Ninfa Beef</h2>
          <h3>Reg. $15</h3>
        </div>
      </div>
    </div>
  );
}
