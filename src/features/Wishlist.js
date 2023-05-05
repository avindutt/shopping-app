import React from 'react';
import { useSelector } from 'react-redux';
import styles from './wishlist.module.css';

export default function Wishlist() {

  const product = useSelector((state) => state.main.favourites);

  return (
    <div>
      {product.map(item => {
        return (
          <div className={styles.container}>
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
                <button>Wishlist</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}