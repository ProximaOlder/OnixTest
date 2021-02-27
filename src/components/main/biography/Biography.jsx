import React from "react";
import "./Biography.css";
import OrderForm from "./orderForm/orderForm";

class Biography extends React.Component {
  state = {
    count: 0,
    elements: [],
  };

  Inc = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  Dec = () => {
    if (this.state.count !== 0) {
      this.setState(({ count }) => ({
        count: count - 1,
      }));
    }
  };

  render() {
    return (
      <div className="newOrder newOrder_standstyle">
        <button
          className="newOrder__button newOrder__button_increase"
          onClick={this.Inc}
        >
          <p className="newOrder__text newOrder__text_textcolor">About me</p>
        </button>
        <div className="biographiArea biographiArea_border">
          {this.state.elements[{...Array(this.state.count)}].map(() => (
            <OrderForm />
          ))}
        </div>
        <button
          className="newOrder__button newOrder__button_increase"
          onClick={this.Dec}
        >
          <p className="newOrder__text newOrder__text_textcolor">Delete</p>
        </button>
      </div>
    );
  }
}
export default Biography;
