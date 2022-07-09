import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [],
  },

  reducers: {
    addToFavorites(state, action) {
      const favorite = state.favorites.find(item => item.id === action.payload.id);
      if (favorite) {
        return;
      } else {
        state.favorites.push({
          ...action.payload,
        });

        toast.success('Added to favorites successfully!', {
          position: 'top-right',
          style: {
            minWidth: 210,
            minHeight: 65,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
            fontSize: 16,
          },
        });
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },

    removeFromFavorites(state, action) {
      const favorites = state.favorites.filter(item => item.id !== action.payload.id);
      state.favorites = favorites;
      localStorage.setItem('favorites', JSON.stringify(state.favorites));

      toast.success('Removed from favorites successfully!', {
        position: 'top-right',
        style: {
          minWidth: 210,
          minHeight: 65,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
          fontSize: 16,
        },
      });
    },
  },
  extraReducers: {},
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
