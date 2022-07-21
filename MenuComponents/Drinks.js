import styles from "../styles/menu.module.css";

export default function Drinks() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Drinks</h2>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>The Millionaire Margarita</h2>
          <p>
            Don Julio 1942 Tequila, Grand Marnier 100 Yr., and fresh lime juice.
          </p>
          <h3>$24.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Mama’s Family Reserve Margarita</h2>
          <p>
            Jose Cuervo Reserva De La Familia Anejo Tequila, Grand Marnier, and
            fresh lime juice.
          </p>
          <h3>$20.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Don Julio Flight Tray</h2>
          <p>
            .5oz sample pours of the following Don Julio Tequilas served on a
            tasting mat:
            <br /> Don Julio Blanco - Pure agave citrus flavor with a clean and
            dry finish. <br />
            Don Julio Reposado - Ripe vanilla and cinnamon flavor with a silky
            and warm finish. <br />
            Don Julio Anejo - Butterscotch and wild honey flavor with a lightly
            spiced finish. <br />
            Don Julio 1942 - Caramel and toffee flavor with a vanilla fragrance.
          </p>
          <h3>$20.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Don Julio Reposado Margarita</h2>
          <p>
            Don Julio Reposado Tequila, Presidente Brandy, Cointreau, and fresh
            lime juice.
          </p>
          <h3>$11.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>The Platinum Margarita</h2>
          <p>
            Jose Cuervo Platino Reserva De La Familia Tequila, Grand Marnier,
            and fresh lime juice.
          </p>
          <h3>$10.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Anejo Sensation Margarita</h2>
          <p>Herradura Anejo Tequila, Grand Marnier, and fresh lime juice.</p>
          <h3>$11.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>The Perfect Margarita</h2>
          <p>Patron Silver Tequila, Patron Citronge, and fresh lime juice.</p>
          <h3>$10.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>The Silver Cadillac Margarita</h2>
          <p>Don Julio Blanco Tequila, Grand Marnier, and fresh lime juice.</p>
          <h3>$10.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>The Riviera Margarita</h2>
          <p>
            Jose Cuervo Tradicional Tequila, Grand Marnier, and fresh lime
            juice.
          </p>
          <h3>$10.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Black Tie Margarita</h2>
          <p>
            Jose Cuervo Black Medallion Tequila, Grand Marnier, and fresh lime
            juice.
          </p>
          <h3>$10.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Mama’s La Perfecta Margarita</h2>
          <p>
            Sauza Gold Tequila and Grand Marnier with a splash of orange juice
            and fresh lime juice.
          </p>
          <h3>$9.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Ninfa’s Parrothead Margarita</h2>
          <p>
            Margaritaville Gold and Silver, triple sec, fresh lime juice, and a
            splash of Blue Curaçao.
          </p>
          <h3>$9.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Grand Gold Margarita</h2>
          <p>
            Jose Cuervo Especial Tequila, Grand Marnier, and fresh lime juice.
          </p>
          <h3>$8.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Mango or Strawberry Ninfarita</h2>
          <p>Our famous Ninfarita goes tropical.</p>
          <h3>$8.00</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Ninfarita</h2>
          <p>Our famous Ninfarita goes tropical.</p>
          <h3>
            Reg. $7.00 <br />
            Pitcher. $24.00
          </h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Pina Colada</h2>
          <p>A creamy tropical sensation with coconut, pineapple, and rum.</p>
          <h3>$7.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Strawberry Daiquiri </h2>
          <p>The perfect drink for a hot summer day.</p>
          <h3>$7.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Coco Loco</h2>
          <p>
            Imagine steel drums, sunsets, and sand as you sip on this tropical
            liberation made with rum, strawberry, coconut, and Mango.
          </p>
          <h3>$7.50</h3>
        </div>

        <div className={styles.item}>
          <hr />
          <h2>Beverages</h2>
          <p>Coffee, Tea, and Softdrinks.</p>
          {/* <h3>$2.49</h3> */}
        </div>
      </div>
    </div>
  );
}
