import React, { FC } from 'react'
import { IProduct } from '../../types/types';
import ProductsItem from './ProductsItem';



interface ProductsListProps {
    products: IProduct[];
    removeProduct: (product: IProduct) => void;
  }
const ProductsList: FC<ProductsListProps> = ({products,removeProduct}) => {
    return (
        <div>
            {products.map((product) =>
                <ProductsItem  removeProduct={removeProduct} key={product.id} product={product}  ></ProductsItem>
            )}
        </div>
    )
}

export default ProductsList