import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import ItemDetail from "../../components/item-details";
import useItemDetail from "../../commons/hooks/use-item-detail";

const ItemDetailPage = () => {
  const { query, push } = useRouter();
  const { categories, item, itemDescription, loading } = useItemDetail(
    query.id
  );

  const onTypeSearch = (value) => {
    push({
      pathname: "/items",
      query: {
        search: value,
      },
    });
  };

  return (
    <>
      <Header onTypeSearch={onTypeSearch} />
      <ItemDetail
        categories={categories}
        item={item}
        itemDescription={itemDescription}
        loading={loading}
      />
    </>
  );
};

export default ItemDetailPage;
