import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './wishlist.module.css';
import { removeFavItem } from './mainSlice';

export default function Wishlist() {

  const product = useSelector((state) => state.main.favourites);
  const dispatch = useDispatch();

  return (
    <div>
      {product.length > 0 ? (
        product.map(item => (
          <div className={styles.container} key={item.id}>
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
              <div className={styles.favbtn} onClick={()=> dispatch(removeFavItem(item.id))}>
                <button>Remove from Wishlist</button>
              </div>
            </div>
          </div>
        ))
    ) : (
          <div className={styles.message}>
            Oops! No items in wishlist
          </div>
      )}
    </div>
  )
}