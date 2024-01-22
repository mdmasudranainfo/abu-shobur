

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
category: false,
};

export const CategoryToggle = createSlice({
  initialState,
  name: 'category-toggle',
  reducers: {
    toggle: state => {
      state.category = !state.category;
    },
  },
});

export const { toggle } = CategoryToggle.actions;

export default CategoryToggle.reducer;
