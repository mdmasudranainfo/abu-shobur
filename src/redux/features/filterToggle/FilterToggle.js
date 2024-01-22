import { createSlice } from '@reduxjs/toolkit';

const initialState = {
filter: false,
};

export const userToggleSlice = createSlice({
  initialState,
  name: 'filter-toggle',
  reducers: {
    toggle: state => {
      state.filter = !state.filter;
    },
  },
});

export const { toggle } = userToggleSlice.actions;

export default userToggleSlice.reducer;
