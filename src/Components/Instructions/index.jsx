import { memo } from "react";
import styles from "./instructions.module.css";

const Instructions = () => {
  return (
    <div className={styles.instructions}>
      Press the "add card" button to add the new Card.
      <br />
      Use the "sort cards" button to sort the Cards by the increase.
      <br />
      Press an X icon on the top right to delete them.
    </div>
  );
};

export default memo(Instructions);
