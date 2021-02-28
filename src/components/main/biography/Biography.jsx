import React, { useState } from "react";
import "./Biography.css";
import OrderForm from "./orderForm/orderForm";

function Biography (){
  let [count, setCount] = useState(0);
  let elements = [];
  let i = [];
  let text = [];

  const Inc = () => {
    setCount(count = count + 1);
    i[count - 1] = count;
    elements.push(...i);
    console.log(...i);
  };

  const Dec = () => {
    if (count !== 0) {
      setCount(count - 1);
      i.pop();
      console.log(elements.push(...i));
    }
  };

    return (
      <div className="newOrder newOrder_standstyle">
        <button
          className="newOrder__button newOrder__button_increase"
          onClick={Inc}
        >
          <p className="newOrder__text newOrder__text_textcolor">About me</p>
        </button>
        <div className="biographiArea biographiArea_border">
          {elements.map((count) => (
            <OrderForm 
            value = {count}
            text = {text}
            />
          ))}
        </div>
        <button
          className="newOrder__button newOrder__button_increase"
          onClick={Dec}
        >
          <p className="newOrder__text newOrder__text_textcolor">Delete</p>
        </button>
      </div>
    );
  }
export default Biography;
