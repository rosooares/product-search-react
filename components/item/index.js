import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const Item = ({ item, position }) => {
  const { push } = useRouter();
  const { address, id, thumbnail, title, currency_id, installments } = item;

  const handleToDetails = () => {
    push({
      pathname: `/items/${id}`,
    });
  };

  return (
    <div
      onClick={handleToDetails}
      onKeyDown={handleToDetails}
      role="link"
      data-testid="item"
      className={styles.item}
      tabIndex={position}
    >
      <div className={styles.img}>
        <img src={thumbnail} alt="MELI" />
      </div>
      <div className={styles.description}>
        <div className={styles.price}>
          {currency_id} {installments?.amount}
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.city}> {address.city_name} </div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    address: PropTypes.object,
    currency_id: PropTypes.string,
    id: PropTypes.string,
    installments: PropTypes.object,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
  position: PropTypes.number,
};
