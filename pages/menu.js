import Antonjitos from "../MenuComponents/Antonjitos";
import styles from "../styles/menu.module.css";
const Menu = () => {
  return (
    <div>
      <div className={styles.menuHeading}>
        <h1>Menu</h1>
      </div>

      <Antonjitos />
    </div>
  );
};

export default Menu;
