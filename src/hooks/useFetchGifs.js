import React, { useEffect, useState } from "react";
import { findGif } from "../helpers/gifApi";

export const useFetchGifs = (nameGif) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getItemsApi = async () => {
    const itemGifs = await findGif(nameGif);
    setItems(itemGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getItemsApi();
  }, []);

  return {
    items,
    isLoading,
  };
};
