import styles from "../styles/button.module.css";

export default function Button({ children, href }) {
  return (
    <div className={styles.orderCon}>
      <div className={styles.order}>
        <a className={styles.orderBtn} href={href}>
          {children}
        </a>
      </div>
    </div>
  );
}
