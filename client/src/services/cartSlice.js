import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalTaxes: 0,
  },

  reducers: {
    addToCart(state, action) {
      const cartItem = state.cartItems.find(item => item.id === action.payload.id);

      if (cartItem && cartItem.id === action.payload.id) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      toast.success('Added to your cart successfully!', {
        position: 'top-right',
        style: {
          minWidth: 210,
          minHeight: 65,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
          fontSize: 17,
        },
      });

      state.cartTotalQuantity += 1;
      state.cartTotalAmount += action.payload.isPriceRange;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.cartItems = cartItems;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

      toast.success('Removed from your cart', {
        position: 'top-right',
        style: {
          minWidth: 210,
          minHeight: 65,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
          fontSize: 17,
        },
      });
    },

    decreaseCartItem(state, action) {
      const cartItem = state.cartItems.find(item => item.id === action.payload.id);

      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);

        toast.success('Removed from your cart', {
          position: 'top-right',
          style: {
            minWidth: 210,
            minHeight: 65,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
            fontSize: 17,
          },
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    getCartTotal(state, action) {
      let totalTax = 0;

      if (state.cartTotalAmount >= 2000 && state.cartTotalAmount <= 2999) {
        totalTax = state.cartTotalAmount * 0.035;
      } else if (state.cartTotalAmount >= 3000 && state.cartTotalAmount <= 3999) {
        totalTax = state.cartTotalAmount * 0.04;
      } else if (state.cartTotalAmount >= 4000 && state.cartTotalAmount <= 4999) {
        totalTax = state.cartTotalAmount * 0.045;
      } else if (state.cartTotalAmount >= 5000) {
        totalTax = state.cartTotalAmount * 0.05;
      } else totalTax = state.cartTotalAmount * 0.025;

      const { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartSubtotal, cartItem) => {
          const { isPriceRange, quantity } = cartItem;
          const itemTotal = isPriceRange * quantity;

          cartSubtotal.totalAmount += itemTotal;
          cartSubtotal.totalQuantity += quantity;
          return cartSubtotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        },
      );
      state.cartTotalQuantity = totalQuantity;
      state.cartTotalAmount = totalAmount;
      state.cartTotalTaxes = totalTax;
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart, decreaseCartItem, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
