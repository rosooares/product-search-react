import PropTypes from "prop-types";
import Breadcrumbs from "../breadcrumbs";
import BuyButton from "../buy-button";
import Card from "../card";
import Loading from "../loading";
import styles from "./styles.module.scss";

function ItemDetail({ categories, item, itemDescription, loading }) {
  const image = item?.pictures?.shift()?.url || "";

  return (
    <div className={styles.wrapper}>
      {loading && <Loading />}
      {!loading && (
        <div className={styles.detailsWrapper}>
          {categories && <Breadcrumbs items={categories} />}
          <Card>
            <div className={styles.productDetail}>
              <div className={styles.thumb}>
                <img src={image} alt="" />
              </div>
              <div className={styles.productData}>
                <p>Nuevo - {item?.sold_quantity} vendidos</p>
                <h1>{item?.title}</h1>
                <h2>$ {item?.price}</h2>
                <BuyButton />
              </div>
              <div className={styles.productDescription}>
                <h1>Descripción del producto</h1>
                <p>{itemDescription?.plain_text}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

ItemDetail.propTypes = {
  categories: PropTypes.array,
  item: PropTypes.shape({
    currency: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    sold_quantity: PropTypes.number,
    title: PropTypes.string,
  }),
  itemDescription: PropTypes.shape({
    plain_text: PropTypes.string,
  }),
  loading: PropTypes.boolean,
};

ItemDetail.defaultProps = {
  loading: true,
};

export default ItemDetail;
