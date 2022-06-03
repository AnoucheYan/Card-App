import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const Card = ({ randomNumber, handleDeleteCard }) => {
  return (
    <div className={styles.card}>
      <div className={styles.close}>
        <button
          className={styles.closeButton}
          onClick={() => handleDeleteCard(randomNumber)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className={styles.randomNumber}>{randomNumber}</div>
    </div>
  );
};

Card.propTypes = {
  randomNumber: PropTypes.number.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
};

export default memo(Card);
