import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearCart, getCartTotal } from 'services/slices/cartSlice';
import { AnimatedPage, Loader, Button, InfoContainer } from 'components';
import CartItem from 'components/CartItem';
import animationData from 'assets/lotties/shake-a-empty-box';
import { generateReduxUniqueId } from 'utils';

const Cart = () => {
  const { cartItems, cartTotalAmount, cartTotalTaxes } = useSelector(state => state.cart);
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, cartTotalAmount, cartTotalTaxes, dispatch]);

  const checkoutHandler = () => {
    setIsSubmitLoading(true);
    if (isAuthenticated) {
      setTimeout(() => {
        navigate(`/checkout/${generateReduxUniqueId()}`, {
          state: {
            items: cartItems,
            totalAmount: cartTotalAmount + cartTotalTaxes,
          },
        });
        setIsSubmitLoading(false);
        dispatch(clearCart());
      }, 2000);
    } else {
      setIsSubmitLoading(false);
      navigate('/login', {
        replace: true,
        state: {
          from: pathname,
        },
      });
    }
  };

  const calculateTotalDiscounts = () => {
    let totalDiscount = 0;
    const checkDiscount = cartItems.filter(item => item.isPriceRange !== item.wasPriceRange);

    const totalDiscountInitial = checkDiscount.reduce((acc, item) => {
      return acc + (item.wasPriceRange - item.isPriceRange) * item.quantity;
    }, totalDiscount);

    return totalDiscountInitial;
  };

  return (
    <AnimatedPage className={`cart ${cartItems.length === 0 ? 'empty' : ''}`}>
      <div className="container">
        {isSubmitLoading && <Loader haveBackground width={50} />}

        {(cartItems.length === 0 && (
          <InfoContainer
            animation={animationData}
            title="Your cart is currently empty!"
            description="Looks like you haven't made your choice yet.."
          />
        )) || (
          <>
            <div className="cart__info">
              <h2>Cart</h2>
              <span>
                ({cartItems?.length} {cartItems?.length === 1 ? 'item' : 'items'})
              </span>
            </div>
            <div className="cart__container">
              <CartItem
                dispatch={dispatch}
                setIsSubmitLoading={setIsSubmitLoading}
                state={cartItems}
              />

              <div className="cart__checkout">
                <div className="cart__checkout__container">
                  <div className="cart__checkout__continue">
                    <Button type="submit" onClick={checkoutHandler}>
                      Continue to checkout
                    </Button>
                  </div>
                  <div className="cart__checkout__summary">
                    <div className="cart__checkout__summary--subtotal">
                      <span>Subtotal</span>
                      <span>
                        {(cartTotalAmount + calculateTotalDiscounts()).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </div>
                    {cartItems?.filter(item => item.isPriceRange !== item.wasPriceRange).length >
                      0 && (
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
                        {cartTotalTaxes?.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="cart__checkout__estimated__total">
                    <span>Estimated total</span>
                    <span>
                      {(cartTotalAmount + cartTotalTaxes).toLocaleString('en-US', {
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
    </AnimatedPage>
  );
};

export default Cart;
