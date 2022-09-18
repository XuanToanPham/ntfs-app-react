import { configureStore } from "@reduxjs/toolkit";
import { validateFileInput, validatePriceInput, validateMiniumBid } from "../redux/ValidateForm/validateForm";
const store = configureStore({
    reducer: {
        inputFile: validateFileInput.reducer,
        inputPrice: validatePriceInput.reducer,
        inputMiniumBid: validateMiniumBid.reducer,
    }
});

export default store;
