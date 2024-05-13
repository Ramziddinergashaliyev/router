import React, { useEffect, useState } from "react";
import axios from "../../api";
import "./shopAll.scss";
import { Link } from "react-router-dom";

function ShopAll() {
  const [shopAll, setShopAll] = useState(null);
  const limit = 12;
  useEffect(() => {
    axios
      .get(`/products`, {
        params: {
          limit: limit,
        },
      })
      .then((res) => setShopAll(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const shopAllData = shopAll?.map((el) => (
    <div key={el.id} className="shopAll__card">
      <div className="shopAll__card__img">
        <Link to={`/product/${el.id}`}>
          <img src={el.images[0]} alt="" />
        </Link>
      </div>
      <div className="shopAll__card__info">
        <p className="shopAll__card__desc">title: {el.title}</p>
        <p className="shopAll__card__desc">price: {el.price}</p>
      </div>
    </div>
  ));

  return (
    <section className="shopAll container">
      <h1 className="shopAll__title">Shop All Products</h1>
      <div className="shopAll__cards">{shopAllData}</div>
    </section>
  );
}

export default ShopAll;
