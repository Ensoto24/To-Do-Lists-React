import styles from "../styles/hours.module.css";

const Hours = () => {
  return (
    <div className={styles.mainHours}>
      <div className={styles.hoursHead}>
        <div className={styles.rectangle}></div>
        <h2>Hours</h2>
      </div>
      <div className={styles.hoursMid}>
        <div className={styles.hoursInfo}>
          <h2>Mon-Fri</h2>
          <p>11:00AM - 10:00PM</p>
        </div>
        <div className={styles.hoursInfo}>
          <h2>Sat</h2>
          <p>9:00AM - 11:00PM</p>
        </div>
        <div className={styles.hoursInfo}>
          <h2>Sun</h2>
          <p>9:00AM - 9:00PM</p>
        </div>
      </div>
      <div>
        <a
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"
          className={styles.order}
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Hours;
