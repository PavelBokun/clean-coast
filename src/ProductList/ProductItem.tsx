import React from "react";
import "./ProductItem.css"; // Стили компонента

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  d: number;
  imageSecond: string;
  imageThrid: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <div  className="prparent">
        <div className="pr">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="pr">
          <img src={product.imageSecond} alt={product.name} />
        </div>
        <div className="pr">
          <img src={product.imageThrid} alt={product.name} />
        </div>
      </div>

      <h3>{product.name}</h3>
      <p>Цена {product.price}</p>
      <p>{product.d}</p>
    </div>
  );
};

export default ProductItem;
