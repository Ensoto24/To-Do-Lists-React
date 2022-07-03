import styles from "../styles/menu.module.css";

export default function Seafood() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Seafood Specialties</h2>

      <h5>
        Served with Guacamole, Mexican Rice, Charra Beans, and Pico de Gallo
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Mariscos Diablo</h2>
          <p>
            Butterflied shrimp stuffed with jack cheese and a sliver of
            jalapeno, bacon wrapped, and grilled.
          </p>
          <h3>Reg. $25</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Broiled Mariscos</h2>
          <p>Tampicomama’s famous broiled shrimp and garlic butter.</p>
          <h3>Reg. $23</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Mariscos Acapulco</h2>
          <p>
            Deep fried jumbo shrimp topped with ranchera sauce and jack cheese.
          </p>
          <h3>Reg. $25</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Grilled Tilapia</h2>
          <p>Seasoned and grilled served with sauteed vegetables.</p>
          <h3>Reg. $16</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Fish Tacos</h2>
          <p>Two spicy chipotle grilled fish tacos.</p>
          <h3>Reg. $15</h3>
        </div>
      </div>
    </div>
  );
}
