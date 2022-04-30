import Image from "next/image";
import styles from "./styles.module.scss";
import loading from "../../assets/loading.gif";

const Loading = () => (
  <div className={styles.wrapper} data-testid="loading">
    <Image src={loading} alt="Imagem carregando..." />
  </div>
);

export default Loading;
