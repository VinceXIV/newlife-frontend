import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import ShopPagination from '../ShopPagination/ShopPagination';
import loadingGif from '../../img/loading.gif';

function Shop({ products, handleSearch, loading, handleAddToCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Pagination Pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sort Products Logic
  // const [sortProducts, setSortProducts] = useState('');
  // if (sortProducts === "price-asc") {
  //   products && products.sort((a, b) => a.price > b.price ? 1 : -1)
  // }
  // if (sortProducts === "price-desc") {
  //   products && products.sort((a, b) => a.price < b.price ? 1 : -1)
  // }

  const renderedProducts =
    currentProducts &&
    currentProducts.map((product) => {
      return (
        <Link
          to={`/products/${product.id}`}
          className='shop-card-nav'
          key={product.id}
        >
          <div className='shop-card'>
            <img src={product.image} alt='Product' />
            <div className='shop-card-text'>
              <p>{product.category}</p>
              <div className='product-title'>
                <h3>{product.title}</h3>
              </div>
              <section className='card-price-button'>
                <h4>Ksh {product.price}</h4>
                <button
                  type='button'
                  onClick={(e) => {
                    e.preventDefault();
                    // alert('Added to Cart!');
                    handleAddToCart(product)
                  }}
                >
                  Add to Cart
                </button>
              </section>
            </div>
          </div>
        </Link>
      );
    });

  if (loading) {
    return (
      <img src={loadingGif} alt='Loading animation' className='loading-gif' />
    );
  }

  return (
    <div className='shop-main-container'>
      <h1>Shop</h1>
      <div className='shop-search-filter-container'>
        <input
          onChange={handleSearch}
          type='search'
          id='search-input'
          placeholder='Search'
          style={{
            fontSize: '16px',
            padding: '4px',
            borderRadius: '5px',
            border: '1px solid grey',
          }}
        />
        <select
          id='shop-sort'
          // onChange={(e) => setSortProducts(e.target.value)}
        >
          <option hidden>Sort</option>
          <option value='price-asc'>Price: Low to High</option>
          <option value='price-desc'>Price: High to Low</option>
        </select>
      </div>
      <div className='shop-cards'>{renderedProducts}</div>
      <ShopPagination
        productsPerPage={productsPerPage}
        products={products}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Shop;
