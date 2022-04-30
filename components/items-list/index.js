import PropTypes from "prop-types";
// import Product from "../product";
import Breadcrumbs from "../breadcrumbs";
import Card from "../card";
import styles from "./styles.module.scss";

const ItemsList = ({ items, categories }) => (
  <>
    <Breadcrumbs items={categories} />
    <div className={styles.containerItems}>
      <Card>
        {items &&
          items.map((item, idx) => (
            // <Product key={item.id} product={item} position={idx} />
            <p> {item.id}</p>
          ))}
      </Card>
    </div>
  </>
);

export default ItemsList;

ItemsList.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.number,
    picture: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    free_shipping: PropTypes.boolean,
    sold_quantity: PropTypes.number,
    description: PropTypes.string,
  }),
  categories: PropTypes.string,
};
