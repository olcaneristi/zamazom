import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from 'react-svg-star-rating';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/cartSlice';

const ProductCard = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = data => {
    dispatch(addToCart(data));
  };

  return (
    <li
      className="home__product"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link className="home__product__element" to={`/products/${data?.slug}`}>
        <div className="home__product__img">
          <img src={data?.image} alt={data?.name} width="100%" />
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
            onClick={() => handleAddToCart(data)}
            className="home__product__add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      )}
    </li>
  );
};

export default ProductCard;
