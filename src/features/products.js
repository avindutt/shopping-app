import React from 'react';
import styles from './products.module.css';
import { useDispatch } from 'react-redux';
import { deleteItem } from './mainSlice';

export default function Products({product}) {

  const dispatch = useDispatch();

  return (
    <div className= {styles.container}>
        <div className={styles.thumbnail}>
            <img src={product.thumbnail}></img>
        </div>
        <div> <b>{product.title}</b> </div>
        <div> {product.description} </div>
        <div> <b>{product.price}</b> </div>

        <div className={styles.btn}>
            <button><img src='https://cdn-icons-png.flaticon.com/512/10569/10569424.png'></img></button>
            <button onClick={()=>dispatch(deleteItem(product.id))}><img src='https://cdn-icons-png.flaticon.com/512/9221/9221441.png'></img></button>
            <button><img src='https://cdn-icons-png.flaticon.com/512/4006/4006932.png' className={styles.heart}></img></button>
        </div>
    </div>
  )
}