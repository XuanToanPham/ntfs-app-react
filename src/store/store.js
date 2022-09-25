import { configureStore } from "@reduxjs/toolkit";
import {
  validateFileInput,
  validatePriceInput,
  validateMiniumBid,
  validateTitle,
  validateInputName,
} from "../redux/ValidateForm/validateForm";
const store = configureStore({
  reducer: {
    inputFile: validateFileInput.reducer,
    inputPrice: validatePriceInput.reducer,
    inputMiniumBid: validateMiniumBid.reducer,
    inputTitle: validateTitle.reducer,
    inputName: validateInputName.reducer,
  },
});

export default store;
