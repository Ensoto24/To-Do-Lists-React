import styles from "../styles/hours.module.css";
import Button from "./Button";

export default function Hours() {
  return (
    <div className={styles.mainHours}>
      <div className={styles.hoursHead}>
        <hr />
        <h2>Hours</h2>
      </div>
      <div className={styles.hoursMid}>
        <div className={styles.hoursInfo}>
          <h2>Sun-Thu</h2>
          <p>11:00AM - 9:00PM</p>
        </div>
        <div className={styles.hoursInfo}>
          <h2>Fri-Sat</h2>
          <p>11:00AM - 10:00PM</p>
        </div>
        {/* <div className={styles.hoursInfo}>
          <h2>Sun</h2>
          <p>9:00AM - 9:00PM</p>
        </div> */}
      </div>

      <Button
        href={"https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"}
      >
        Order Now
      </Button>
    </div>
  );
}
