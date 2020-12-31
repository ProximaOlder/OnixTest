import React from "react";
import "./Product.css";
import monkey1 from "../../../img/monkey1.jpg";
import monkey2 from "../../../img/monkey2.jpg";
import monkey3 from "../../../img/monkey3.jpg";

export default function Product() {
  return (
    <div className="product">
      <div className="cell">
        <img className="imgProduct" src={monkey1} alt="" />
        <div className="description">
          <span className="productSpan">price:</span>
          <span className="productSpan">the size:</span>
          <span className="productSpan">material:</span>
          <span className="productSpan">in stock:</span>
        </div>
      </div>
      <div className="cell">
        <img className="imgProduct" src={monkey2} alt="" />
        <div className="description">
          <span className="productSpan">price:</span>
          <span className="productSpan">the size:</span>
          <span className="productSpan">material:</span>
          <span className="productSpan">in stock:</span>
        </div>
      </div>
      <div className="cell">
        <img className="imgProduct" src={monkey3} alt="" />
        <div className="description">
          <span className="productSpan">price:</span>
          <span className="productSpan">the size:</span>
          <span className="productSpan">material:</span>
          <span className="productSpan">in stock:</span>
        </div>
      </div>
    </div>
  );
}
