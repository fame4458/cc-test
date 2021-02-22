import React from "react";
import numeral from "numeral";
import ReactStars from "react-rating-stars-component";

export default function Card(props) {
  return (
    <div className="card custom-card" style={{ minHeight: "100%" }}>
      <img
        src={props.data.image_url}
        className="card-img-top"
        alt="product"
        style={{
          maxHeight: "196px",
          border: "0px solid transparent",
          borderRadius: "15px",
        }}
      />
      <div className="card-body d-flex">
        <img
          src={props.data.brand_info.url}
          alt="brand"
          height="40px"
          className="rounded"
        />
        <div className="px-2">
          <h6 class="card-title">{props.data.name}</h6>
          <div className="row text-nowrap">
            <div className="col-6">
              <p className="grey-text">Price</p>
              <p className="price">
                ฿ {numeral(parseInt(props.data.price)).format("0,0.00")}
              </p>
            </div>
            <div className="col-6">
              {props.data.review.rating > 0 && (
                <>
                  <p className="grey-text">
                    Reviews ({props.data.review.number} reviews)
                  </p>
                  <ReactStars count={5} value={props.data.review.rating} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
