import PropTypes from "prop-types";
import Item from "../item";
import Breadcrumbs from "../breadcrumbs";
import Card from "../card";
import styles from "./styles.module.scss";

const ItemsList = ({ categories, items }) => (
  <>
    <Breadcrumbs items={categories} />
    <div className={styles.containerItems}>
      <Card>
        {items &&
          items.map((item, idx) => (
            <Item key={item.id} item={item} position={idx} />
          ))}
      </Card>
    </div>
  </>
);

export default ItemsList;

ItemsList.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.shape({
    condition: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    free_shipping: PropTypes.boolean,
    picture: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    sold_quantity: PropTypes.number,
  }),
};
