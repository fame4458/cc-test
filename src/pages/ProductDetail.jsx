import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetchProductDetail } from "../api/product";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Core/Button";

export default function ProductDetail() {
  const [isFetch, setIsFetch] = useState(false);
  const [product, setProduct] = useState();

  let { id } = useParams();

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchProductDetail(id);
    setProduct(data);
    setIsFetch(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return <h1 className="text-center">...waiting...</h1>;
  }

  return (
    <>
      {product && (
        <div className="container p-5" style={{ minWidth: "100vw" }}>
          <div className="card p-4" style={{ borderRadius: "10px" }}>
            <div className="row">
              <div className="col-4">
                <img
                  src={product.image_url}
                  alt="product"
                  style={{ maxWidth: "460px", borderRadius: "15px" }}
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h3 className="product-name">{product && product.name}</h3>
                  <div className="d-flex">
                    <ReactStars count={5} value={product.review.rating} />
                    &nbsp; &nbsp;
                    <p className="rating">({product.review.number} reviews)</p>
                  </div>
                  <p className="description">{product.description}</p>
                  <div className="col-4 p-0">
                    <Button text="ADD TO CART" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
