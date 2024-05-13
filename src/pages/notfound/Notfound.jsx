import React from "react";
import error from "../../assets/images/404.png";
import "./notfound.scss";

function Notfound() {
  return (
    <div className="Notfound__eror container">
      <img src={error} alt="" />
    </div>
  );
}

export default Notfound;
