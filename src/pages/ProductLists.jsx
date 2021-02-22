import React, { useCallback, useEffect, useState } from "react";
import { apiFetchProductList } from "../api/product";
import _ from "lodash";
import Card from "../components/Core/Card";

export default function ProductLists() {
  const [isFetch, setIsFetch] = useState(false);
  const [products, setProducts] = useState();

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchProductList();
    setProducts(data);
    setIsFetch(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return <h1 className="text-center">...waiting...</h1>;
  }

  return (
    <div className="container">
      <div className="p-5">
        {_.map(products, (data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
