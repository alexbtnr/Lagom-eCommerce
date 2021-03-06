import React, { Component } from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "../utils/shopData";

export class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
