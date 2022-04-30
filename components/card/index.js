import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Card = ({ children }) => <div className={styles.card}>{children}</div>;

export default Card;

Card.propTypes = {
  children: PropTypes.node,
};
