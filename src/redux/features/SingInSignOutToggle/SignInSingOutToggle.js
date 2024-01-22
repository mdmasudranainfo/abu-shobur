import { createSlice } from '@reduxjs/toolkit';

const initialState = {
SingInSingOut: false,
};

export const SignInSingOutToggle = createSlice({
  initialState,
  name: 'search-toggle',
  reducers: {
     account_toggle: state => {
      state.SingInSingOut = !state?.SingInSingOut;
    },
  },
});

export const { account_toggle } = SignInSingOutToggle.actions;

export default SignInSingOutToggle.reducer;
