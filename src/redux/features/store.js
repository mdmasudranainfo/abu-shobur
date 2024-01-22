

import { configureStore } from "@reduxjs/toolkit";
import FilterToggle from "./filterToggle/FilterToggle";
import SearchToggle from "./searchToggle/SearchToggle";
import CategoryToggle from "./categoryToggle/CategoryToggle";
import SignInSingOutToggle from "./SingInSignOutToggle/SignInSingOutToggle";


export const store = configureStore({
     reducer: {
          filter_toggle: FilterToggle,
          Search_toggle: SearchToggle,
          Category_toggle: CategoryToggle,
          Account_toggle: SignInSingOutToggle,

     },
});
