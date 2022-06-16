import styles from "../styles/navbar.module.css";
import logo from "../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="Ninfa's" width={119} height={67} />
        </div>
        <ul className={styles.links}>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Order Now</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
