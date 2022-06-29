import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    cartTotalQuantity: localStorage.getItem('cartTotalQuantity')
      ? JSON.parse(localStorage.getItem('cartTotalQuantity'))
      : 0,
    cartTotalAmount: localStorage.getItem('cartTotalAmount')
      ? JSON.parse(localStorage.getItem('cartTotalAmount'))
      : 0,
  },

  reducers: {
    addToCart(state, action) {
      const cartItem = state.cartItems.find(item => item.id === action.payload.id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.cartTotalQuantity += 1;
      state.cartTotalAmount += action.payload.isPriceRange;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('cartTotalAmount', JSON.stringify(state.cartTotalAmount));
      localStorage.setItem('cartTotalQuantity', JSON.stringify(state.cartTotalQuantity));

      toast.success('Added to cart', {
        position: 'top-right',
        style: {
          minWidth: 210,
          minHeight: 65,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
          fontSize: 17,
        },
      });
    },
  },
  extraReducers: {},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
