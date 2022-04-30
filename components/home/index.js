import React, { useState } from "react";
import isEmpty from "lodash.isempty";
import Header from "../header";
import Loading from "../loading";
import ItemsList from "../items-list";
import useItems from "../../commons/hooks/use-items";
import styles from "./styles.module.scss";

const Home = () => {
  const [name, setName] = useState();
  const onTypeSearch = (value) => {
    setName(value);
  };

  const { items, loading, categories } = useItems(name);
  const hideItems = !isEmpty(items) && !loading;
  console.log("items", items);
  console.log("categories", categories);
  return (
    <>
      <Header onTypeSearch={onTypeSearch} />
      <div className={styles.container}>
        {loading && <Loading />}
        {isEmpty(items) && <h1> Hola, ¿buscas algo?</h1>}
        {hideItems && <ItemsList items={items} categories={categories} />}
      </div>
    </>
  );
};

export default Home;
