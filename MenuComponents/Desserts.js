import styles from "../styles/menu.module.css";

export default function Desserts() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Desserts</h2>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Fried Ice Cream</h2>
          <p>
            A scoop of vanilla ice cream wrapped in corn flakes, sesame seeds
            and graham cracker crumbs, flash fried, topped with whipped cream,
            raisins, pecans, and cajeta sauce. Served in a sweet pastry shell.
          </p>
          <h3>Reg. $7</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Flan</h2>
          <p>
            A glazed Mexican confection of velvety smooth custard topped with
            whipped cream and cajeta sauce.
          </p>
          <h3>Reg. $6</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Sopapillas</h2>
          <p>
            Ninfa's light and flaky pastry puffs, dusted with powdered sugar and
            cinnamon. Served with honey.
          </p>
          <h3>
            $2 each
            <br /> $9 for 6
          </h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Sopapillas Especial</h2>
          <p>1 served with ice cream.</p>
          <h3>Reg. $3</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Cheesecake</h2>
          <h3>Reg. $6</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Carrot Cake</h2>
          <h3>Reg. $6</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Chocolate Cake</h2>
          <h3>Reg. $6</h3>
        </div>
      </div>
    </div>
  );
}
