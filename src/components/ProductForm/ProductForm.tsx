import React, { useRef, useState } from "react";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import { IProduct } from "../../types/types";

interface ProductFormProps {
    create: (newPost: IProduct) => void;
    products:IProduct[]
    
  }
  

  
function ProductForm({ create,products }: ProductFormProps) {
    
  const [product, setProduct] = useState<IProduct>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const addNewPost = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const maxId = Math.max(...products.map(product => product.id));
    const newPost: IProduct = { ...product, id: maxId + 1 };
    create(newPost);
    setProduct({id:0, title: '', description: '', price: 0, image: '' });
  }
  

  return (
    <div>
      <form>
        <MyInput
          value={product.title}
          type="text"
          placeholder="Product Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, title: e.target.value })
          }
        />
        <MyInput
          value={product.description}
          type="text"
          placeholder="Description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <MyInput
          value={product.price.toString()}
          type="number"
          placeholder="Price"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, price: parseFloat(e.target.value) })
          }
        />
        <MyInput
          value={product.image}
          type="text"
          placeholder="Image URL"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, image: e.target.value })
          }
        />
        <MyButton onClick={addNewPost}>Create Product</MyButton>
      </form>
    </div>
  );
}

export default ProductForm;
