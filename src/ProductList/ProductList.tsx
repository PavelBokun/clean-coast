import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css'; // Стили компонента

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  d:number;
  imageSecond:string;
  imageThrid:string;

}

interface ProductListProps {
  products: Product[]
}

// export const defaultProducts: Product[] = [
//     {
//       id: 1,
//       name: 'Унитаз 1',
//       price: 99.99,
//       image: 'path/to/image1.jpg',
//     },
//     {
//       id: 2,
//       name: 'Унитаз 2',
//       price: 149.99,
//       image: 'path/to/image2.jpg',
//     },
//     {
//       id: 3,
//       name: 'Унитаз 3',
//       price: 199.99,
//       image: 'path/to/image3.jpg',
//     },
//     // Добавьте другие товары по вашему усмотрению
//   ];

const ProductList: React.FC<ProductListProps> = ({ products}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
