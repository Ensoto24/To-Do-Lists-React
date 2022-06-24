import styles from "../styles/menu.module.css";

const PlatosMexicanos = () => {
  return (
    <div className={styles.menuHolder}>
      <div className={styles.subHeading}>
        <div className={styles.rectangle}></div>
        <h2>Platos Mexicanos</h2>
      </div>

      <h5>
        Served with Mexican Rice and your choice of Refried or Charra Beans.
      </h5>

      <div className={styles.itemHolder}>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Tejas Combo</h2>
          <p>
            Beef or chicken fajitas with a crispy beef taco and cheese
            enchilada.
          </p>
          <h3>Reg. $15</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Aldo</h2>
          <p>Beef or cheese enchilada and crispy beef taco. </p>
          <h3>Reg. $12</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>El Benny</h2>
          <p>
            Beef or chicken chimichanga topped with chile con queso or beef
            gravy.
          </p>
          <h3>Reg. $13</h3>
          <h3>Add $3 for Fajitas</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Tamales Compuestos</h2>
          <p>
            Three pork tamales toppped with chile con carne and chedda cheese.
          </p>
          <h3>Reg. $13</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Delirio</h2>
          <p>Two chicken flautas topped with guacamole and sour cream.</p>
          <h3>Reg. $13</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>El Eddie</h2>
          <p>
            Three soft flour tacos with choice of picadillo beef or ranchera
            chicken.
          </p>
          <h3>Reg. $13</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>El Dannie</h2>
          <p>
            Three crispy tacos with choice of picadillo beef or ranchera
            chicken.
          </p>
          <h3>Reg. $13</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Mexico City Combo</h2>
          <p>Cheese chile relleno, beef enchilada, and crispy taco.</p>
          <h3>Reg. $15</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>El Henry</h2>
          <p>Cheddar cheese enchilada, pork tamale, and crispy beef taco.</p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Mexico City Combo</h2>
          <p>Chicken enchilada, crispy beef taco and pork tamale.</p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.rectangle}></div>
          <h2>Ninfa's Delicioso</h2>
          <p>Chicken flauta and your choice of fajita taco a la Ninfa.</p>
          <h3>Reg. $16</h3>
        </div>
      </div>
    </div>
  );
};

export default PlatosMexicanos;
