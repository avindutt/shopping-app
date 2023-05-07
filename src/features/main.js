import React from 'react';
import styles from './main.module.css';
import { useEffect } from 'react';
import { apiData, sort } from './mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from './products';
import { useState } from 'react';

function Main() {
    
    const dispatch = useDispatch();
    const product = useSelector((state) => state.main.products);

    const [showSort, setShowSort] = useState(false); // for showing cross button
    const [sortedProducts, setSortedProducts] = useState(null); // either it is null or will be popped up by sorted products array
    const [sortOrder, setSortOrder] = useState('asc'); // for order of sorting

    useEffect(() => {
        const url = 'https://my-json-server.typicode.com/avindutt/my-repo/db'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch(apiData(data.posts));
        });
    }, [])

    const handleSort = () => {
      const sorted = [...product].sort((a, b) => { // using inbuilt javascript sort function
        const priceA = parseFloat(a.price.slice(3)); // 'Rs.' will be removed from the value and rest string will be converted to a number
        const priceB = parseFloat(b.price.slice(3));
        if(sortOrder === 'asc') {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
      setSortedProducts(sorted);
      setShowSort(true);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // toggling the asc and desc states
    }

    const handleResetSort = () => {
      setSortedProducts(null); // so that product array will be mapped on dom
      setShowSort(false);
      setSortOrder('asc');
    }

    const sortedProductList = sortedProducts || product; // either sorted array or original product array will be sent to map function
    
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
        <button className={styles.sortbtn} onClick={()=>handleSort()}>
          Sort by: <b>Price</b> 
          <p>({sortOrder === 'asc' ? 'Low to high' : 'High to low'})</p>
          </button>
          {showSort? 
          (<button className={styles.cross} onClick={()=>handleResetSort()}><img src='https://cdn-icons-png.flaticon.com/512/1617/1617543.png'></img></button>) 
          : ''}
        <hr></hr>
        <div className={styles.items}>
          {sortedProductList.map((product) =>
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