import styles from "../styles/menu.module.css";

export default function Enchilada() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Enchilada Dinners</h2>

      <h5>
        A Three Enchilada Platter served with Mexican Rice and your choice or
        Refried or Charra Beans. Chopped onions served on request.
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Antiguas (Cheese)</h2>
          <p>Cheddar cheese topped with enchilada sauce.</p>
          <h3>Reg. $13</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Suizas</h2>
          <p>
            Chicken fajita or cheese topped with creamy suiza sauce, jack
            cheese, avocado, sour cream, and green onions.
          </p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Granjas (Chicken)</h2>
          <p>
            Ranchera chicken topped with sour cream. Topped with salsa ranchera
            and jack cheese.
          </p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Al Carbon (Fajita)</h2>
          <p>
            Beef or chicken fajita topped with cheddar cheese and chile con
            carne.
          </p>
          <h3>Reg. $16</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Principales</h2>
          <p>
            Picadillo ground beef topped with chile con carne and cheddar
            cheese.
          </p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Verdes</h2>
          <p>
            Pork carnitas with tomatillo sauce, avocado slices, sour cream, and
            jack cheese.
          </p>
          <h3>Reg. $16</h3>
        </div>
      </div>
    </div>
  );
}
