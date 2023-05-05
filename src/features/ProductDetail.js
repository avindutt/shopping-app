import React from 'react';
import styles from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favItem } from './mainSlice';

export default function ProductDetail() {    
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.main.productDetail);

  return (
    <div className={styles.container}>
        <div className={styles.back}>
          <Link to='/'><button>BACK</button></Link>
        </div>
        <div className={styles.thumbnail}><img src={item.thumbnail}></img></div>
        <div className={styles.details}>
            <div><b>{item.title}</b></div>
            <div className={styles.desc}>{item.description}</div>
            <div className={styles.reviews}>26.4k reviews</div>
            <hr></hr>
            <div>{item.price}</div>
            <div>inclusive of all taxes</div>
            <div>SELECT SIZE</div>
            <div className={styles.size}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
            </div>
            <div className={styles.addbtn}>
            <button>ADD TO BAG</button>
            </div>
            <div className={styles.favbtn}>
            <button onClick={()=>dispatch(favItem(item))}>Wishlist</button>
            </div>
        </div>
    </div>
  )
}