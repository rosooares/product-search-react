import debounce from "lodash.debounce";
import PropTypes from "prop-types";
import Image from "next/image";
import SearchIcon from "../../assets/ic_Search.png";
import styles from "./styles.module.scss";

const SearchBar = ({ placeholder, onTypeSearch }) => {
  const handleChange = debounce((e) => onTypeSearch(e.target.value), 500);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input name="" placeholder={placeholder} onChange={handleChange} />
      </div>
      <button value="" type="button" className={styles.searchButton}>
        {/* <img src={SearchIcon} alt="search" /> */}
        <Image src={SearchIcon} alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onTypeSearch: PropTypes.func,
  placeholder: PropTypes.string,
};
