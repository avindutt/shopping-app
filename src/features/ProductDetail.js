import React from 'react';
import styles from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favItem, addToCart } from './mainSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetail() {    
    const dispatch = useDispatch();
    const item = useSelector((state)=>state.main.productDetail);
    const description = item.description;
    const [detail, setDetail] = useState(description);
    const [selectedSize, setSelectedSize] = useState('');

    const handleChange = (e) => {
      e.preventDefault();
      setDetail(e.target.value);
    }

    const handleInput = (e) => {
      setSelectedSize(e.target.value);
    }

    const handleAddToCart = () => {
      if (selectedSize) {
        // dispatched action with 2 arguments this time as I want product item as well as its size
        dispatch(addToCart({ item, size: selectedSize }));
        toast("Item added to Cart", { autoClose: 2300, draggablePercent: 60 });
      } else {
        toast("Please select a size", { autoClose: 2300, draggablePercent: 60 });
      }
    };

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

            <div>
              <label>
              <input
                type='radio'
                name='size'
                value='S'
                onChange={(e)=>handleInput(e)}
              />
              <span>S</span>
              </label>
            </div>

            <div>
              <label>
              <input
                type='radio'
                name='size'
                value='M'
                onChange={(e)=>handleInput(e)}
              />
              <span>M</span>
              </label>
            </div>

            <div>
              <label>
              <input
                type='radio'
                name='size'
                value='L'
                onChange={(e)=>handleInput(e)}
              />
              <span>L</span>
              </label>
            </div>

            <div>
              <label>
              <input
                type='radio'
                name='size'
                value='XL'
                onChange={(e)=>handleInput(e)}
              />
              <span>XL</span>
              </label>
            </div>

            <div>
              <label>
              <input
                type='radio'
                name='size'
                value='XXL'
                onChange={(e)=>handleInput(e)}
              />
              <span>XXL</span>
              </label>
            </div>
           
            </div>
            <div className={styles.addbtn}>
            <button onClick={()=>handleAddToCart()}>ADD TO BAG</button>
            </div>
            <div className={styles.favbtn}>
            <button onClick={()=>dispatch(favItem(item))}>Wishlist</button>
            </div>
        </div>
    </div>
  )
}