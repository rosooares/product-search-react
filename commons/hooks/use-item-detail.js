import { useEffect, useState } from "react";
import { CATEGORIES } from "../constants/categories";
import axios from "axios";

const useItemDetail = (id) => {
  const [item, setItem] = useState();
  const [itemDescription, setItemDescription] = useState();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const apiUrl = "https://api.mercadolibre.com/items/";
      const detail = await axios.get(`${apiUrl}${id}`);
      const detailDescription = await axios.get(`${apiUrl}${id}/description`);

      setItem(detail.data);
      setItemDescription(detailDescription.data);
      setCategories(CATEGORIES);
      setLoading(false);
    }

    if (id) fetch();
  }, [id]);

  return { categories, item, itemDescription, loading };
};

export default useItemDetail;
