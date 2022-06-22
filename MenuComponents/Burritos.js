import styles from "../styles/menu.module.css";

const Burritos = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Burritos</h2>
      </div>

      <h5>All burritos served with spanish rice.</h5>

      <div className={styles.itemHolder}>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>El Barrio</h2>
          <p>
            Bean and cheese burrito topped with our enchilada sauce and chili
            con queso.
          </p>
          <h3>Reg. $11</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>La Zona Rosa</h2>
          <p>
            Burrito stuffed with picadillo beef, beans, and chili con queso.
            Topped with enchilada sauce and cheddar cheese.
          </p>
          <h3>Reg. $12, With Fajita. $12</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>El Callejon</h2>
          <p>
            Burrito stufed with ranchera chicken, beans, and chili con queso.
            Topped with enchilada gravy and monterrey jack cheese.
          </p>
          <h3>Reg. $12, With Fajita. $15</h3>
        </div>
      </div>
    </div>
  );
};

export default Burritos;
