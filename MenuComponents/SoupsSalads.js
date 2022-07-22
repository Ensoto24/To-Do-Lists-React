import styles from "../styles/menu.module.css";

export default function SoupsSalads() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Soups and Salads</h2>

      <h5>
        Served with Guacamole, Pico de Gallo, Mexican Rice, and Charra Beans
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Fajita Taco Salad</h2>
          <h3>Chicken Fajita - $13</h3>
          <h3>Beef Fajita - $15</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Shrimp and Avocado Salad</h2>
          <p>
            Grilled shrimp over mixed green and topped with avocados, tomatoes
            red onions, black olives and monterey jack cheese.{" "}
          </p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Taco Salad</h2>
          <p>Your choice of ground beef or ranchera chicken</p>
          <h3>Reg. $12</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Tortilla Soup</h2>
          <p>
            Mushrooms and vegetables. Served with rice, pico de gallo and
            tortilla strips.{" "}
          </p>
          <h3>Reg. $10</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Santa Fe Chicken Salad</h2>
          <p>
            Mexican spiced cubed chicken cilantro tomatoes, bell peppers and
            avocado over mixed greens topped with our homemade cilantro lime
            dressing and tortilla strips.
          </p>
          <h3>Reg. $14</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Caldo Xochitl</h2>
          <p>
            Chicken and avocado soup. Served with rice, pico de gallo, and
            tortilla strips.
          </p>
          <h3>Reg. $10</h3>
        </div>
      </div>
    </div>
  );
}
