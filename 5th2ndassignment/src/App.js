import React from 'react';
import ProductCard from './components/productdetails';
import './App.css';
const products = [
  {
    productId: '1',
    productPic: 'https://www.toptal.com/developers/img-resize/view/95048ea7740f5dc8bdd292a42bbb64ef.jpg',
    productName: 'SHOES',
    brand: 'ADIDAS',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt neque velit.',
    price: '7$',
    rating: 4,
  },
  {
    productId: '2',
    productPic: 'https://www.toptal.com/developers/img-resize/view/74e32045e47030193f2be8829912e58a.jpg',
    productName: 'WATCH',
    brand: 'TITAN',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt neque velit.',
    price: '4$',
    rating: 3,
  },
  {
    productId: '1',
    productPic: 'https://www.toptal.com/developers/img-resize/view/18f85b463301cc47afdee59144b0fda7.jpg',
    productName: 'TSHIRT',
    brand: 'LEVI',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt neque velit.',
    price: '5$',
    rating: 4,
  },


  
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
