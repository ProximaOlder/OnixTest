import React from 'react';
import './newOrder.css';

const NewOrder = () => {
  return (
    <div className="newOrder newOrder_standstyle">
     <button className="newOrder__button newOrder__button_increase">
        <p className="newOrder__text newOrder__text_textcolor">New Order</p>
     </button>
    </div>
  );
};
export default NewOrder;