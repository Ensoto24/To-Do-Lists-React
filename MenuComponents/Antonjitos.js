import styles from "../styles/menu.module.css";

export default function Antonjitos() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Antonjitos</h2>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Queso Flameado</h2>
          <p>Melted jack cheese casserole with chorizo (Mexican Sausage).</p>
          <h3>Reg. $9, Lg. $12</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Fajita Queso</h2>
          <p>
            Melted jack cheese casserole with your choice beef or chicken fajita
            meat.
          </p>
          <h3>Reg. $10, Lg. $13</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Dos Camarones</h2>
          <p>
            Two jalapeños stuffed with large shrimp and jack cheese. Deep fried
            and served with ranch dressing.
          </p>
          <h3>Reg. $12</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Chile Con Queso</h2>
          <h3>Reg. $8, Lg. $11</h3>
          <p>Add Ground Beef.</p>
          <h3>Reg. $9, Lg. $12</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Ceviche</h2>
          <p>
            Seasoned shrimp, fish, scallops, onions, tomatoes, and jalapeños.
          </p>
          <h3>Reg. $13</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Fiesta Platter</h2>
          <p>
            A gigantic sampler platter: Pork ribs, jalapeños bullets, Chicken
            Flautas, Fajita Quesadillas, and Fajita Nachos. Served with
            guacamole, sour cream, pico de gallo, and chile con queso.
          </p>
          <h3>Reg. $18</h3>
        </div>
      </div>

      <h4>Nachos</h4>
      <h5>Served with sour cream, guacamole and jalapeños.</h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Bean and Cheese Nachos</h2>
          <h3>Reg. $8, Lg. $12</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Ground Beef Nachos</h2>
          <h3>Reg. $11, Lg. $13</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Fajita Nachos</h2>
          <h3>Reg. $13, Lg. $17</h3>
        </div>
      </div>

      <h4>Quesadillas</h4>
      <h5>Served with sour cream, guacamole and jalapeños.</h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Cheese Quesadilla</h2>
          <h3>Reg. $8, Lg. $14</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Fajita Quesadilla</h2>
          <h3>Reg. $12, Lg. $16</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Chihuahua Quesadilla</h2>
          <p>Bacon, Poblano Peppers and Mushrooms</p>
          <h3>Reg. $11, Lg. $15</h3>
        </div>
      </div>
    </div>
  );
}
