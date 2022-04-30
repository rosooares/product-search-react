import PropTypes from "prop-types";
import { Fragment } from "react";
import classNames from "classnames";
import isEmpty from "lodash.isempty";
import styles from "./styles.module.scss";

const Breadcrumbs = ({ items }) => (
  <div className={styles.breadcrumbs}>
    {!isEmpty(items) &&
      items.map((item, idx) => (
        <Fragment key={item}>
          <span
            className={classNames({
              [styles.breadcrumbsLastItem]: idx === items.length - 1,
            })}
          >
            {item}
          </span>
          {!(idx === items.length - 1) && (
            <span className={styles.breadcrumbsSeparator}>{" > "}</span>
          )}
        </Fragment>
      ))}
  </div>
);

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  items: PropTypes.string,
};
