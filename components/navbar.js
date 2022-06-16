import styles from "../styles/navbar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="Ninfa's" width={112} height={60} />
        </div>
        <ul className={styles.links}>
          <li>
            <a>Menu</a>
          </li>
          <span className={styles.dot}></span>
          <li>
            <a>About Us</a>
          </li>
          <span className={styles.dot}></span>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <button className={styles.order}>Order Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
