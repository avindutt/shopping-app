import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./mainSlice";
import styles from './AddProduct.module.css';
import { toast } from "react-toastify";

export default function AddProduct() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();
    
        // Created the product object
        const product = {
          id: new Date().getTime(), // Generated a unique ID
          title,
          price,
          description,
          thumbnail
        };
    
        // Dispatched the action to add the product
        dispatch(addProduct(product));
        toast("Product added! Go to Home Page", {autoClose: 2300, draggablePercent: 60});
    
        // Cleared the form inputs
        setTitle('');
        setPrice(0);
        setDescription('');
      };

  return (
    <div className={styles.specialComponent}>
    <div className={styles.container}>
    <form onSubmit={handleSubmit}>
      <div className={styles.inner}>
        <div>
        <label>
          Title:
          <br></br>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Price:
          <br></br>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Description:
          <br></br>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        </div>
        <div>
        <label>
          Thumbnail Url:
          <br></br>
          <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
        </label>
        </div>
        <div>
        <button type="submit">Add Product</button>
        </div>
      </div>
    </form>

    </div>
    </div>
  )
}
