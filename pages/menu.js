import Antonjitos from "../MenuComponents/Antonjitos";
import Burritos from "../MenuComponents/Burritos";
import DeLaParilla from "../MenuComponents/DeLaParilla";
import Desserts from "../MenuComponents/Desserts";
import Enchilada from "../MenuComponents/Enchilada";
import Especialidades from "../MenuComponents/Especialidades";
import MamaPlatters from "../MenuComponents/MamaPlatters";
import styles from "../styles/menu.module.css";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuHeading}>
        <h1>Menu</h1>
      </div>

      <Antonjitos />
      <MamaPlatters />
      <Especialidades />
      <DeLaParilla />
      <Enchilada />
      <Burritos />
      <Desserts />
    </div>
  );
};

export default Menu;
