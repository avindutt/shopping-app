import React from 'react';
import styles from './main.module.css';
import { useEffect } from 'react';
import { apiData } from './mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from './products';

function Main() {
    
    const dispatch = useDispatch();
    const product = useSelector((state) => state.main.products);
    console.log(product);

    useEffect(() => {
        const url = 'https://my-json-server.typicode.com/avindutt/my-repo/db'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch(apiData(data.posts));
        });
    }, [])
    

  return (
    <div className={styles.container}>
        <div className={styles.heading}>Home / Clothing / <b>Men & Women T-Shirts </b></div>
        <div className={styles.heading}><b>Men & Women T-Shirts</b> - 96248 items</div>
        <br></br>
        <span className={styles.heading}><b>FILTERS</b></span>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <a href=''>Bundles</a>
            <a href=''>Country of Origin</a>
            <a href=''>Size</a>
            <a href=''>Add ons</a>
            <a href=''>Fabric</a>
            <a href=''>+15 more</a>
            </div>
        </div>
        <hr></hr>
        <div className={styles.items}>
          {product.map((product) =>
          <Product 
          product={product}
          key={product.id}
          />
          )}
         </div>
    </div>
  )
}

export default Main;