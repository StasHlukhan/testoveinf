import React, { FC, useState } from 'react'
import MyButton from '../UI/Button/MyButton';
import './Products.css';
import { IProduct } from '../../types/types';
import { useNavigate } from 'react-router-dom'
import MyModal from '../UI/Modal/MyModal';
import ConfirmForm from '../ConfirmForm/ConfirmForm';
interface ProductItemProps {
  product: IProduct;
  removeProduct: (product: IProduct) => void;
}
interface ModalState {
  showModal: boolean;
  
  }
const ProductItem: FC<ProductItemProps> = ({ product, removeProduct }) => {
    const router = useNavigate()
    const [modal, setModal] = useState<ModalState>({ showModal: false });
  const handleRemoveClick = () => {
    removeProduct(product);
  };
  const handleModalClose = () => {
    setModal({ showModal: false });
  };
  return (
    <div>
      <div className="item">
        <p><span>Id:</span> {product.id}</p>
        <p> <span>Title:</span> {product.title}</p>
        <p><span>Price:</span>{product.price} </p>
        
        
        <img style={{width:50,height:50}} src={product.image} alt="" />
        <MyButton onClick={()=>{router(`/product/${product.id}`)}}>Open</MyButton>
        <MyButton onClick={() => setModal({ showModal: true })}>Remove</MyButton>
        <MyModal visible={modal.showModal} setVisible={handleModalClose}>
          <ConfirmForm handleModalClose={handleModalClose} handleRemoveClick={handleRemoveClick}></ConfirmForm>
        </MyModal>
      </div>
    </div>
  );
};

export default ProductItem;
