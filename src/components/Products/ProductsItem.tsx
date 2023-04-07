import React, { FC } from 'react'
import MyButton from '../UI/Button/MyButton';
import './Products.css';
import { IProduct } from '../../types/types';
import { useNavigate } from 'react-router-dom'
interface ProductItemProps {
  product: IProduct;
  removeProduct: (product: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, removeProduct }) => {
    const router = useNavigate()

  const handleRemoveClick = () => {
    removeProduct(product);
  };

  return (
    <div>
      <div className="item">
        <p><span>Id:</span> {product.id}</p>
        <p> <span>Title:</span> {product.title}</p>
        <p><span>Price:</span>{product.price} </p>
        
        
        <img style={{width:50,height:50}} src={product.image} alt="" />
        <MyButton onClick={()=>{router(`/product/${product.id}`)}}>Open</MyButton>
        <MyButton onClick={handleRemoveClick}>Remove</MyButton>
      </div>
    </div>
  );
};

export default ProductItem;
