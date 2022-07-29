import styles from "../styles/menu.module.css";

export default function Burritos() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Burritos</h2>

      <h5>All burritos served with spanish rice.</h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>El Barrio</h2>
          <p>
            Bean and cheese burrito topped with our enchilada sauce and chili
            con queso.
          </p>
          <h3>Reg. $12</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>La Zona Rosa</h2>
          <p>
            Burrito stuffed with picadillo beef, beans, and chili con queso.
            Topped with enchilada sauce and cheddar cheese.
          </p>
          <h3>
            Reg. $13,
            <br /> With Fajita - $17
          </h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>El Callejon</h2>
          <p>
            Burrito stufed with ranchera chicken, beans, and chili con queso.
            Topped with enchilada gravy and monterrey jack cheese.
          </p>
          <h3>
            Reg. $13,
            <br /> With Fajita - $16
          </h3>
        </div>
      </div>
    </div>
  );
}
