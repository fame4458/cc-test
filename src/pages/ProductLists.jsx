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
    <div className="container mx-auto mw-100">
      <div className="row p-5">
        {_.map(products, (data, index) => (
          <div className="col-3 my-2" key={index}>
            <Card data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
