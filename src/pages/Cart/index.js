import IconMinus from 'assets/icons/IconMinus';
import IconPlus from 'assets/icons/IconPlus';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, decreaseCartItem, getCartTotal, removeFromCart } from 'store/cartSlice';
import AnimatedPage from 'components/AnimatedPage';
import { motionContainer, motionItem } from 'helper';
import { motion } from 'framer-motion';

const Cart = () => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [state, dispatch]);

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = item => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = item => {
    dispatch(decreaseCartItem(item));
  };

  return (
    <section className="cart">
      <AnimatedPage className="container">
        {(state?.cartItems.length === 0 && (
          <div className="cart__empty">
            <h2>Your card is empty.</h2>
            <p>Description here.</p>
          </div>
        )) || (
          <>
            <div className="cart__info">
              <h2>Your Cart</h2>
              <span>{state?.cartItems?.length} items</span>
            </div>
            <div className="cart__container">
              <div className="cart__items">
                <motion.ul variants={motionContainer} initial="hidden" animate="visible">
                  {state?.cartItems?.map(item => (
                    <motion.li
                      key={item.id}
                      className="cart__items__list item"
                      variants={motionItem}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="cart__items__list--left">
                        <div className="cart__items__list__img">
                          <Link to={`/products/${item.slug}`}>
                            <img src={item.coverImage} alt={item.name} width="100" height="100" />
                          </Link>
                        </div>
                        <div className="cart__items__list__content">
                          <div className="cart__items__list__content__name">
                            <Link to={`/products/${item.slug}`}>{item.name}</Link>
                          </div>
                          <p className="cart__items__list__content__desc">{item.description}</p>
                          {item?.color && <p>Color: {item.color.name}</p>}
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
                          <button
                            className="cart__items__list__content__remove"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart__items__list__quantity">
                        <button
                          className="cart__items__list__quantity--increase"
                          onClick={() => handleIncreaseQuantity(item)}
                        >
                          <IconPlus />
                        </button>
                        <input type="number" value={item.quantity} readOnly />
                        <button
                          className="cart__items__list__quantity--decrease"
                          onClick={() => handleDecreaseQuantity(item)}
                        >
                          <IconMinus />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="cart__checkout">
                <div className="cart__checkout__container">
                  <div className="cart__checkout__continue">
                    <button type="submit" className="cart__checkout__button">
                      Continue to checkout
                    </button>
                  </div>
                  <div className="cart__checkout__summary">
                    <div className="cart__checkout__summary--subtotal">
                      <span>Subtotal ({state?.cartItems?.length} items)</span>
                      <span>
                        {state?.cartTotalAmount.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </div>
                    <div className="cart__checkout__summary--taxes">
                      <span>Taxes</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  <div className="cart__checkout__estimated__total">
                    <span>Estimated total</span>
                    <span>
                      {state?.cartTotalAmount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatedPage>
    </section>
  );
};

export default Cart;
