import { AnimatedPage, InfoContainer } from 'components';
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import success2 from 'assets/lotties/success2.json';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;

  useEffect(() => {
    if (location && !location?.state?.items) {
      navigate('/', {
        replace: true,
      });
    }
  }, [location, navigate]);

  return (
    <AnimatedPage className="checkout">
      <div className="container checkout__container">
        <div className="checkout__content">
          <div className="checkout__content__success">
            <InfoContainer
              animation={success2}
              title="Wohoo! Your order is successfully created! 🎉🎉 "
              description="Thanks for choosing us. See you later!"
            />
          </div>
          <div className="checkout__content__items">
            <h3 className="checkout__content__items__heading">
              Order Summary <span> #{randomNumber}</span>
            </h3>
            {location?.state?.items?.map(item => (
              <div className="checkout__content__items__item" key={item.id}>
                <div className="cart__items__list--left">
                  <div className="cart__items__list__img checkout__img">
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
                    <p className="checkout__content__items__item__quantity">
                      Quantity: <span>{item.quantity}</span>
                    </p>
                  </div>
                </div>
                <div className="home__product__price checkout__price">
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
              </div>
            ))}

            <div className="checkout__content__items__item__info__price">
              <p className="checkout__content__items__item__info__price--title">
                Total (with taxes):{' '}
              </p>
              <p className="checkout__content__items__item__info__price--amount">
                {location?.state?.totalAmount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Checkout;
