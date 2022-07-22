import styles from "../styles/menu.module.css";

import Drinks from "../MenuComponents/Drinks";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Drinks />
    </div>
  );
}
