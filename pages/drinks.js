import styles from "../styles/menu.module.css";

import Drinks from "../MenuComponents/Drinks";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <h1 className={styles.heading}>Menu</h1>

      <Drinks />
    </div>
  );
}
