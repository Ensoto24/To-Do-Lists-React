import styles from "../styles/menu.module.css";

const NinfasOriginals = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Ninfa's Originals</h2>
      </div>

      <h5>Served with Rice and Charra beans</h5>

      <div className={styles.itemHolder}>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Carnitas</h2>
          <p>
            Tender pork chunks cooked to perfection. Served with sliced
            avocados, spicy verde sauce, pico de gallo, and sour cream.
          </p>
          <h3>Reg. $15</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Fajitas y Chile Relleno</h2>
          <p>
            Cheese chile relleno and your choice of beef or chicken fajitas.{" "}
          </p>
          <h3>Chicken. $18 - Beef. $20</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Tacos Musicos</h2>
          <p>
            Spicy carnitas tacos served with avocado slices, pico de gallo, and
            sour cream.
          </p>
          <h3>Reg. $15</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Don Quixote</h2>
          <p>
            Two cheese stuffed poblano peppers topped with ranchera sauce and
            jack cheese.
          </p>
          <h3>Reg. $13 - Beef. $14</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Alambre De Jesus</h2>
          <p>
            Large grilled shishkabob with vegetables, chicken and shrimp. Served
            on a bed of steamed rice with charra beans, guacamole, and chile con
            queso.
          </p>
          <h3>Reg. $20</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Mixta Ninfa</h2>
          <p>
            Charbroiled shrimp and your choice of our famous beef or chicken
            fajitas.
          </p>
          <h3>Reg. $22</h3>
        </div>
      </div>
    </div>
  );
};

export default NinfasOriginals;
