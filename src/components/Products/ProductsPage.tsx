import React, { useEffect, useState } from 'react';
import { IProduct } from '../../types/types';

import axios from 'axios';
import { usePosts } from '../../hooks/useProducts';
import ProductsList from '../../components/Products/ProductsList';
import MyModal from '../../components/Modal/MyModal';
import MyButton from '../../components/UI/Button/MyButton';
import PostForm from '../../components/ProductForm/ProductForm';
import PostFilter from '../../components/ProductFilter/ProductFIlter';
import useFetching from '../../hooks/useFetching';
import PostService from '../../API/PostService';
interface ModalState {
  showModal: boolean;
  
  }
  interface FilterState {
    sort:string;
    query:string;
    
    }
function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  const [modal, setModal] = useState<ModalState>({ showModal: false });
  const [filter, setFilter] = useState<FilterState>({sort: '', query: ''})
  const sortedAndSearchedPosts = usePosts(products, filter.sort, filter.query);

  useEffect(()=>{
    fetchProducts()
  },[])
  
  const [fetchProducts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll();
    setProducts([...products, ...response.data])
   
})
  const createProduct = (newPost: IProduct) => {
    setProducts([...products, newPost])
    setModal ({ showModal: false })
  }

  const handleModalClose = () => {
    setModal({ showModal: false });
  };

  const removeProduct = (product: IProduct): void => {
    setProducts(products.filter(p => p.id !== product.id));
  };

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal({ showModal: true })}>
              Create Product
      </MyButton>
    
     <MyModal visible={modal.showModal} setVisible={handleModalClose}>
      <PostForm  products={sortedAndSearchedPosts}  create={createProduct}></PostForm>
     </MyModal>
     <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      /> 
      <ProductsList   removeProduct={removeProduct} products={sortedAndSearchedPosts}></ProductsList>
    </div>
  );
}

export default App;
