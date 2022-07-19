import IconMinus from 'assets/icons/IconMinus';
import IconPlus from 'assets/icons/IconPlus';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, decreaseCartItem, getCartTotal, removeFromCart } from 'store/cartSlice';
import AnimatedPage from 'components/AnimatedPage';
import { motionContainer, motionItem } from 'helper';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import animationData from 'assets/lotties/shake-a-empty-box';
import Loader from 'components/Loader';
import IconReturn from 'assets/icons/IconReturn';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Cart = () => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [state, dispatch]);

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

  const calculateTotalDiscounts = () => {
    let totalDiscount = 0;
    const checkDiscount = state.cartItems.filter(item => item.isPriceRange !== item.wasPriceRange);

    const totalDiscountInitial = checkDiscount.reduce((acc, item) => {
      return acc + (item.wasPriceRange - item.isPriceRange) * item.quantity;
    }, totalDiscount);

    return totalDiscountInitial;
  };

  return (
    <section className="cart">
      <AnimatedPage className="container">
        {isSubmitLoading && <Loader haveBackground width={50} />}

        {(state?.cartItems.length === 0 && (
          <div className="cart__empty">
            <Lottie
              isClickToPauseDisabled={true}
              options={defaultOptions}
              style={{ maxWidth: 350 }}
            />
            <h2 className="cart__empty__title">Your cart is currently empty!</h2>
            <p className="cart__empty__description">
              Looks like you haven't made your choice yet..
            </p>
            <Link to="/" className="cart__empty__return">
              Return to Home
              <span>
                <IconReturn width="20" height="20" background="#0071dc" color="#0071dc" />
              </span>
            </Link>
          </div>
        )) || (
          <>
            <div className="cart__info">
              <h2>Cart</h2>
              <span>
                ({state?.cartItems?.length} {state?.cartItems?.length === 1 ? 'item' : 'items'})
              </span>
            </div>
            <div className="cart__container">
              <div className="cart__items">
                <motion.ul variants={motionContainer} initial="hidden" animate="visible">
                  {state?.cartItems?.map((item, index) => (
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
                      <span>Subtotal</span>
                      <span>
                        {(state?.cartTotalAmount + calculateTotalDiscounts()).toLocaleString(
                          'en-US',
                          {
                            style: 'currency',
                            currency: 'USD',
                          },
                        )}
                      </span>
                    </div>
                    {state?.cartItems?.filter(item => item.isPriceRange !== item.wasPriceRange)
                      .length > 0 && (
                      <div className="cart__checkout__summary--discount">
                        <span>Discount</span>
                        <span className="cart__checkout__summary--discount-value">
                          {' - '}
                          {calculateTotalDiscounts().toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </span>
                      </div>
                    )}
                    <div className="cart__checkout__summary--taxes">
                      <span>Taxes</span>
                      <span>
                        {state?.cartTotalTaxes?.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="cart__checkout__estimated__total">
                    <span>Estimated total</span>
                    <span>
                      {(state?.cartTotalAmount + state?.cartTotalTaxes).toLocaleString('en-US', {
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
