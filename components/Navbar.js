import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src={logo} alt="Ninfa's" width={112} height={60} />
          </a>
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="menu">
              <a>Menu</a>
            </Link>
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
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
