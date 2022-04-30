import React, { useState } from "react";
import isEmpty from "lodash.isempty";
import { useRouter } from "next/router";
import Header from "../header";
import Loading from "../loading";
import ItemsList from "../items-list";
import useItems from "../../commons/hooks/use-items";
import styles from "./styles.module.scss";

const Home = () => {
  const { query, push } = useRouter();
  const onTypeSearch = (value) => {
    push({
      pathname: "/items",
      query: {
        search: value,
      },
    });
  };

  const { items, loading, categories } = useItems(query.search);
  const hideItems = !isEmpty(items) && !loading;

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
