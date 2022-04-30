import { useEffect, useState } from "react";
import axios from "axios";

const useItems = (name) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const apiUrl = "https://api.mercadolibre.com/sites/MLA/search?q=:";
      const { data } = await axios.get(apiUrl, { params: { name } });

      console.log("useEffect - data", data);
      console.log("useEffect -name", name);

      setItems(data.items);
      setCategories(data.categories);
      setLoading(false);
    }

    if (name) fetch();
  }, [name]);

  return { items, loading, categories };
};

export default useItems;
