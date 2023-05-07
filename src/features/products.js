import React from 'react';
import styles from './products.module.css';
import { useDispatch } from 'react-redux';
import { deleteItem, favItem, setProductDetail } from './mainSlice';
import { Link } from 'react-router-dom';

export default function Products({product}) {

  const dispatch = useDispatch();

  return (
    <Link className={styles.link} to={`/product-details/${product.id}`}>
    <div className= {styles.container} onClick={()=>dispatch(setProductDetail(product))}>
        <div className={styles.thumbnail}>
            <img src={product.thumbnail}></img>
        </div>
        <div> <b>{product.title}</b> </div>
        <div> {product.description} </div>
        <div> <b>{product.price}</b> </div>

        <div className={styles.btn}>
            <button onClick={(e)=>{e.preventDefault(); dispatch(deleteItem(product.id));}}><img src='https://cdn-icons-png.flaticon.com/512/9221/9221441.png'></img></button>
            <button onClick={(e)=>{e.preventDefault(); dispatch(favItem(product))}}><img src='https://cdn-icons-png.flaticon.com/512/4006/4006932.png'></img></button>
        </div>
    </div>
    </Link>
  )
}