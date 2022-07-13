import styles from "../styles/button.module.css";
import { motion } from "framer-motion";

export default function Button({ children, href }) {
  return (
    <motion.div
      className={styles.orderCon}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.order}>
        <a
          className={styles.orderBtn}
          href={href}
          target={"_blank"}
          rel="noreferrer"
        >
          {children}
        </a>
      </div>
    </motion.div>
  );
}
