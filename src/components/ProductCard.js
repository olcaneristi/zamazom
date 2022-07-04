import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from 'react-svg-star-rating';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/cartSlice';
import CustomModal from './CustomModal';
import { motion } from 'framer-motion';
import { motionContainer, motionItem } from 'helper';

const ProductCard = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleSelectProduct = item => {
    setSelectedProduct(item);
  };

  const handleAddToCartAndCloseModal = item => {
    dispatch(addToCart(item));

    setTimeout(() => {
      setIsOpen(false);
    }, 600);
  };

  const openSelectProductModal = data => {
    return (
      <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="home__product__variant__container">
          <h3 className="home__product__variant__title">Color</h3>
          <motion.ul
            className="home__product__variant__list motionContainer"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
          >
            {data &&
              data.variantList.map((item, index) => (
                <motion.li
                  key={index}
                  className="home__product__variant__item motionItem"
                  variants={motionItem}
                >
                  <button
                    className="home__product__variant__button"
                    onClick={() => handleSelectProduct(item)}
                    style={{
                      border:
                        selectedProduct.id === item.id
                          ? '1.5px solid black'
                          : '1.5px solid rgb(216, 208, 208)',
                    }}
                  >
                    <img src={data.coverImage} alt={data.name} width="80px" />
                  </button>
                  <p className="home__product__variant__color">{item.color.name}</p>
                </motion.li>
              ))}
          </motion.ul>
        </div>

        <div className="home__product__variant__summary">
          <span className="home__product__variant__summary--price">
            {data.isPriceRange.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>

          <button
            disabled={!selectedProduct.id}
            className="home__product__variant__summary--btn"
            onClick={() => handleAddToCartAndCloseModal(selectedProduct)}
          >
            Add to cart
          </button>
        </div>
      </CustomModal>
    );
  };

  return (
    <li
      className="home__product"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link className="home__product__element" to={`/products/${data?.slug}`}>
        <div className="home__product__img">
          <img src={data?.coverImage} alt={data?.name} width="100%" />
        </div>
        <div className="home__product__content">
          <div className="home__product__text">
            <span className="home__product__title">{data.title}</span>
            <span className="home__product__name">{data.name}</span>
          </div>

          <div className="home__product__price">
            <div className="home__product__price--regular">
              {data.wasPriceRange !== data.isPriceRange && (
                <span className="home__product__price--regular-text">
                  {data.wasPriceRange.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              )}
            </div>
            <div className="home__product__price--sale">
              <span
                className={
                  data.wasPriceRange === data.isPriceRange
                    ? 'home__product__price--sale-text-normal'
                    : 'home__product__price--sale-text-discount'
                }
              >
                {data.isPriceRange.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </span>
            </div>
          </div>

          <div className="home__product__rating">
            <StarRating
              unit="half"
              initialRating={data.rating}
              isReadOnly
              starClassName="home__product__rating--star"
            />
            <span className="home__product__rating--count">{`(${data.ratingCount})`}</span>
          </div>
        </div>
      </Link>

      {isShown && (
        <div className="home__product__add-to-cart">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="home__product__add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      )}

      {openSelectProductModal(data)}
    </li>
  );
};

export default ProductCard;
