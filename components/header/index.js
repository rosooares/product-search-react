import PropTypes from "prop-types";
import Image from "next/image";
import Logo from "../../assets/Logo_ML.png";
import SearchBar from "../searchbar";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Header = ({ onTypeSearch }) => {
  const { push } = useRouter();

  const goToHome = () => {
    push({
      pathname: "/",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div onClick={goToHome}>
          <Image src={Logo} alt="Meli" width={44} height={32} />
        </div>

        <SearchBar
          placeholder="Nunca dejes de buscar"
          onTypeSearch={onTypeSearch}
        />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onTypeSearch: PropTypes.func,
};
