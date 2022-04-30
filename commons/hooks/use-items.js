import { useEffect, useState } from "react";
import { CATEGORIES } from "../constants/categories";
import axios from "axios";

const useItems = (name) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=:";
      const { data } = await axios.get(`${apiUrl}${name}`);

      setItems(data?.results);
      setCategories(CATEGORIES);
      setLoading(false);
    }

    if (name) fetch();
  }, [name]);

  return { items, loading, categories };
};

export default useItems;
