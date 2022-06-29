import { createSlice } from '@reduxjs/toolkit';

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
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: {},
});

export const { addToFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
