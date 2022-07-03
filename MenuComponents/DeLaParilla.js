import styles from "../styles/menu.module.css";

export default function DeLaParilla() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>De La Parilla</h2>

      <h5>
        Served with Guacamole, Pico de Gallo, Mexican Rice, and Charra Beans
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Original Fajita Platters</h2>
          <p>
            Fresh marinated chicken breast or our famous frilled and marinated
            beef skirt steak, or get both! Served sizzling with sour cream,
            guacamole, and pico de gallo.
          </p>
          <h3>
            <strong>Chicken</strong>
            1/4lb - $16, 1/2lb - $22, 1lb - $ 34
            <strong>Beef</strong>
            1/4lb - $18, 1/2lb - $24, 1lb - $ 38
            <strong>Mixed</strong>
            1/4lb - $17, 1/2lb - $23, 1lb - $ 36
          </h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Carne Asada</h2>
          <p>Beef fajita skirt steak, cut vert thin and grilled well done.</p>
          <h3>Reg. $18</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Mixta Campesino</h2>
          <p>Carnitas and your choice of our original fajitas.</p>
          <h3>Reg. $17</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Mixta Acapulco</h2>
          <p>Two Acapulco shrimp and your choice of our original fajitas.</p>
          <h3>Reg. $18</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Mixta Guanajuato</h2>
          <p>
            Pork ribs, cheese chile relleno, and your choice of original
            fajitas.
          </p>
          <h3>Reg. $22</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Mixta Rio Grande</h2>
          <p>
            Charboiled shrimp, original fajitas, and your choice of carnitas or
            pork ribs.
          </p>
          <h3>Reg. $24</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Parilla Mixta</h2>
          <p>
            A great sampler of all Ninfa’s best! Beef and Chicken Fajitas
            Carnitas, Charboiled shrimp, pork ribs, fried mushrooms, and a
            pablano pepper stuffed with jack cheese. Served with sour cream.
          </p>
          <h3>Reg. $50</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Mexican Style Charboiled Pork Ribs</h2>
          <p>Served with your choice of spicy or mild BBQ sauce.</p>
          <h3>Half Slab. $19, Full Slab. $28</h3>
        </div>
      </div>
    </div>
  );
}
