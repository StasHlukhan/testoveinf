import React, { FC } from 'react'
import { IProduct } from '../../types/types';
import ProductsItem from './ProductsItem';
import '../../App.css'
import { TransitionGroup,CSSTransition } from 'react-transition-group'


interface ProductsListProps {
    products: IProduct[];
    removeProduct: (product: IProduct) => void;
  }
const ProductsList: FC<ProductsListProps> = ({products,removeProduct}) => {
    return (
        <div>
             <TransitionGroup>
            {products.map((product) =>
             <CSSTransition key={product.id}
             timeout={500}
             classNames="post">
                <ProductsItem  removeProduct={removeProduct} key={product.id} product={product}  ></ProductsItem>
             </CSSTransition>
                
            )}
            </TransitionGroup>
        </div>
    )
}

export default ProductsList