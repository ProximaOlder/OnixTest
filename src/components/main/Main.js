import React from 'react';
import './Main.css'
import Product from './products/Product';

export default function Main () {
  return (
    <div className='main'>
    <span className="heading">Monkey paradise</span>
    <span className="heading descriptionSite">Unfortunately, I did not fully understand the task itself) Therefore, I decided to do everything in my power not to lose my face in the mud. The site itself is intended for informational purposes, up to a business card (for example, a toy store). Below you can give examples of the best works or a catalog of goods</span>
    <Product />
    </div>
  );
}