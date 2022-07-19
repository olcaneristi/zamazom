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
      const { totalAmount, totalQuantity, totalTaxes } = state.cartItems.reduce(
        (cartSubtotal, cartItem) => {
          const { isPriceRange, quantity } = cartItem;
          const itemTotal = isPriceRange * quantity;

          let totalTax = 0;

          if (itemTotal > 2000) {
            totalTax = itemTotal * 0.035;
          } else if (itemTotal > 3000) {
            totalTax = itemTotal * 0.04;
          } else if (itemTotal > 4000) {
            totalTax = itemTotal * 0.045;
          } else if (itemTotal > 5000) {
            totalTax = itemTotal * 0.05;
          } else totalTax = itemTotal * 0.025;

          cartSubtotal.totalAmount += itemTotal;
          cartSubtotal.totalQuantity += quantity;
          cartSubtotal.totalTaxes = totalTax;
          return cartSubtotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        },
      );
      state.cartTotalQuantity = totalQuantity;
      state.cartTotalAmount = totalAmount;
      state.cartTotalTaxes = totalTaxes;
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart, decreaseCartItem, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
