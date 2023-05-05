import React from 'react';
import styles from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favItem } from './mainSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetail() {    
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.main.productDetail);
    const description = item.description;
    const [detail, setDetail] = useState(description);

    const handleChange = (e) => {
      e.preventDefault();
      setDetail(e.target.value);
    }

  return (
    <div className={styles.container}>
        <div className={styles.back}>
          <Link to='/'><button>BACK</button></Link>
        </div>
        <div className={styles.thumbnail}><img src={item.thumbnail}></img></div>
        <div className={styles.details}>
            <div><b>{item.title}</b></div>
            <div className={styles.desc}>
              <form onSubmit={(e)=>{toast('Updated Details!', {autoClose: 1500}); e.preventDefault()}}>
                <input value={detail} onChange={(e)=>handleChange(e)}></input>
                <button>UPDATE</button>
              </form>
            </div>
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