import React from 'react';

const ProductCard = ({ product }) => {
  const { productId, productPic, productName, brand, productDescription, price } = product;

  const handleAddToCart = () => {
    alert(`Product ${productId}, which is ${productName} of brand ${brand} and price ${price} is added to the cart. Please proceed to pay!`);
    
  };

  return (
    <div className="product-card">
      <img src={productPic} alt={productName} className="product-image" />
      <div className="product-details">
        <h1 className="product-name">{productName}</h1>
        <h2 className="product-brand">{brand}</h2>
        <p className="product-description">{productDescription}</p>
        <h1 className="product-price">{price}</h1>
        <button  onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
