import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.data.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 class="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.description}</p>
      </div>
    </div>
  );
}
