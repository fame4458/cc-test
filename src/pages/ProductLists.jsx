import React, { useCallback, useEffect, useState } from "react";
import { apiFetchProductList } from "../api/product";
import _ from "lodash";
import Card from "../components/Core/Card";
import { Link } from "react-router-dom";

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
    <div className="container mx-auto mw-100 p-5">
      <p className="product-header">
        Products ({products ? products.length : 0})
      </p>
      <div className="row ">
        {_.map(products, (data, index) => (
          <div className="col-3 my-2" key={index}>
            <Link to={`/product/${data._id}`} className="no-style">
              <Card data={data} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
