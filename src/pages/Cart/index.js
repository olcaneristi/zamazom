import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const state = useSelector(state => state.cart);
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
            <h2>Your Cart</h2>
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
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="home__product__price">
                        <div className="home__product__price--sale">
                          <span className="home__product__price--sale-text-normal">
                            {item.isPriceRange.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })}
                          </span>
                        </div>
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cart__checkout">
                <div className="cart__checkout__total">Toplam</div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
