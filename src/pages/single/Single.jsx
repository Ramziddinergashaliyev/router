import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./single.scss";

function Single() {
  const [single, SetSingle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => SetSingle(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(single);

  return (
    <div className="product container">
      <h1 className="product__title">Shop Item</h1>
      <div className="product__card">
        <div className="product__img">
          <img src={single?.images[0]} alt="" />
        </div>
        <div className="product__info">
          <h3 className="product__info__title">
            <span>title:</span> {single?.title}
          </h3>
          <p className="product__info__desc">
            <span>description</span>
            {single?.description}
          </p>
          <p className="product__info__desc">
            <span>brand :</span>
            {single?.brand}
          </p>
          <p className="product__info__desc">
            <span>category:</span> {single?.category}
          </p>
          <p className="product__info__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            veritatis quo, sint maxime quia labore dignissimos tenetur nam
            delectus vel corporis? Sit quos iure animi temporibus nisi,
            laboriosam tenetur? A?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Single;
