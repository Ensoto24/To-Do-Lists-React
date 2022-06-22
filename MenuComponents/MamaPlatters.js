import styles from "../styles/menu.module.css";

const MamaPlatters = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Mama's Pechuga Platters</h2>
      </div>

      <h5>
        Served with Mexican Rice, Charra Beans, Pico de Gallo, Guacamole, and
        Sour Cream
      </h5>

      <div className={styles.itemHolder}>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Pechuga a la Guera</h2>
          <p>
            Chicken breast stuffed with baby shrimp and jack cheese. Sauteed
            with mushrooms in a garlic butter sauce
          </p>
          <h3>Reg. $20</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Pechuga a la ninfa</h2>
          <p>
            Chicken breast topped with sauteed onions, tomatoes and
            jalapenos(spicy).
          </p>
          <h3>Reg. $16</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Pechuga Chihuahua</h2>
          <p>
            Charbroiled chicken breast topped with jack cheese, poblano peppers,
            bacon, and mushrooms.
          </p>
          <h3>Reg. $16</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Pechuga Acapulcco</h2>
          <p>
            Breaded and golden fried chicken topped with ranchero sauce and
            monterey jack cheese.
          </p>
          <h3>Reg. $17</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Pechuga Gratinada</h2>
          <p>
            Charbroiled chicken breat topped with jack cheese, sauteed
            mushrooms, onions, and bell peppers.
          </p>
          <h3>Reg. $16</h3>
        </div>
      </div>
    </div>
  );
};

export default MamaPlatters;
