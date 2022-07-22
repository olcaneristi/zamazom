import React from 'react';
import { motion } from 'framer-motion';
import { motionContainer, motionItem } from 'utils';
import { IconMinus, IconPlus } from 'assets/icons';
import { Link } from 'react-router-dom';
import { addToCart, decreaseCartItem, removeFromCart } from 'services/slices/cartSlice';
import Button from 'components/Button';

const CartItem = ({ setIsSubmitLoading, dispatch, state }) => {
  const handleRemoveFromCart = item => {
    setIsSubmitLoading(true);
    setTimeout(() => {
      dispatch(removeFromCart(item));
      setIsSubmitLoading(false);
    }, 500);
  };

  const handleIncreaseQuantity = item => {
    setIsSubmitLoading(true);
    setTimeout(() => {
      dispatch(addToCart(item));
      setIsSubmitLoading(false);
    }, 500);
  };

  const handleDecreaseQuantity = item => {
    setIsSubmitLoading(true);
    setTimeout(() => {
      dispatch(decreaseCartItem(item));
      setIsSubmitLoading(false);
    }, 500);
  };

  return (
    <div className="cart__items">
      <motion.ul variants={motionContainer} initial="hidden" animate="visible">
        {state.map((item, index) => (
          <motion.li
            variants={motionItem}
            key={index}
            className="cart__items__list motionItem"
            transition={{ duration: 0.5 }}
          >
            <div className="cart__items__list--left">
              <div className="cart__items__list__img">
                <Link to={`/products/${item.slug}`}>
                  <picture>
                    <source srcSet={item?.coverImage} type="image/webp" />
                    <img src={item.coverImage} alt={item.name} />
                  </picture>
                </Link>
              </div>
              <div className="cart__items__list__content">
                <div className="cart__items__list__content__name">
                  <Link to={`/products/${item.slug}`}>{item.name}</Link>
                </div>
                {item?.color && (
                  <p className="cart__items__list__content__color">
                    Color: <span>{item.color.name}</span>
                  </p>
                )}
                <div className="home__product__price">
                  <div className="home__product__price--regular">
                    {item.wasPriceRange !== item.isPriceRange && (
                      <span className="home__product__price--regular-text">
                        {item.wasPriceRange.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    )}
                  </div>

                  <div className="home__product__price--sale">
                    <span className="home__product__price--sale-text-normal">
                      {item.isPriceRange.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                  </div>
                </div>
                <Button buttonType="text" onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </Button>
              </div>
            </div>

            <div className="cart__items__list__quantity">
              <Button
                buttonType="unset"
                className="cart__items__list__quantity--increase"
                onClick={() => handleIncreaseQuantity(item)}
              >
                <IconPlus />
              </Button>
              <input type="number" value={item.quantity} readOnly />
              <Button
                buttonType="unset"
                className="cart__items__list__quantity--decrease"
                onClick={() => handleDecreaseQuantity(item)}
              >
                <IconMinus />
              </Button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CartItem;
