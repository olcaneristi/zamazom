import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const state = useSelector(state => state.cart);
  console.log(state);
  return (
    <section className="cart">
      <div className="container">
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
                <ul>
                  {state?.cartItems?.map(item => (
                    <li key={item.id} className="cart__list">
                      <div className="cart__list__left">
                        <div className="cart__img">
                          <Link to={`/products/${item.slug}`}>
                            <img src={item.image} alt={item.name} width="100" height="100" />
                          </Link>
                        </div>
                        <div className="cart__content">
                          <div className="cart__content__name">
                            <Link to={`/products/${item.slug}`}>{item.name}</Link>
                          </div>
                          <p className="cart__content__desc">{item.description}</p>
                          <p className="cart__content__quantity">Quantity: {item.quantity}</p>
                        </div>
                      </div>
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
                    </li>
                  ))}
                </ul>
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
      </div>
    </section>
  );
};

export default Cart;
