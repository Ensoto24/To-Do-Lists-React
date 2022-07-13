import Antonjitos from "../MenuComponents/Antonjitos";
import Burritos from "../MenuComponents/Burritos";
import DeLaParilla from "../MenuComponents/DeLaParilla";
import Desserts from "../MenuComponents/Desserts";
import Enchilada from "../MenuComponents/Enchilada";
import Especialidades from "../MenuComponents/Especialidades";
import MamaPlatters from "../MenuComponents/MamaPlatters";
import SoupsSalads from "../MenuComponents/SoupsSalads";
import Tacos from "../MenuComponents/Tacos";
import Seafood from "../MenuComponents/Seafood";
import PlatosMexicanos from "../MenuComponents/PlatosMexicanos";
import NinfasOriginals from "../MenuComponents/NinfasOriginals";
import Drinks from "../MenuComponents/Drinks";

import styles from "../styles/menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <h1 className={styles.heading}>Menu</h1>

      <Antonjitos />
      <SoupsSalads />
      <Tacos />
      <MamaPlatters />
      <Especialidades />
      <NinfasOriginals />
      <Seafood />
      <DeLaParilla />
      <PlatosMexicanos />
      <Enchilada />
      <Burritos />
      <Desserts />
      <Drinks />
    </div>
  );
}
