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
            <a href="menu">Menu</a>
          </li>
          <span className={styles.dot}></span>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <span className={styles.dot}></span>
          <li>
            <a href="#contact-us">Contact</a>
          </li>
          <li className={styles.orderCon}>
            <a
              href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"
              className={styles.order}
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
