import React from 'react';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from './mainSlice';

export default function Cart() {

  const product = useSelector((state) => state.main.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
        <div className={styles.header}><span>BAG</span> --------- ADDRESS --------- PAYMENT</div>
        <div className={styles.container}>
        {product.map((item) => (
          <div className={styles.components} key={item.id}>
          <div><img src={item.thumbnail}></img></div>
          <div className={styles.details}>
            <div><b>{item.title}</b></div>
            <div>{item.description}</div>
            <div>Size : {item.size}</div>
            <div><b>{item.price}</b></div>
            <button onClick={()=>dispatch(removeCart(item.id))}>Remove</button>
          </div>
          </div>
        ))}
        </div>
    </div>
  )
}
