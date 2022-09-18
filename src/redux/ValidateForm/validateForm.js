import {createSlice} from "@reduxjs/toolkit"

const initialStoreName = {
    isValid: true,
    messageError: "",
    }
export const validateFileInput = createSlice({
    name: "validateFileInput",
    initialState: initialStoreName,
    reducers: {
        isValidFile(state, action){
            console.log(action.payload)
            if(!action.payload.includes("png") || !action.payload.includes('jpg') || !action.payload.includes('jpeg')){
                state.isValid = false;
                state.messageError = "File does not support. You must use .png or .jpg"
            }
            else{
                state.isValid = true;
                state.messageError = ""
            }
        },

        isSizeFile(state, action){
            if(action.payload > 1000000){
                state.isValid = false;
                state.messageError = "Please upload a file smaller than 1 MB"
            }
            else{
                state.isValid = true;
                state.messageError = ""
            }
        }
    }
})

const initialPriceInput = {
    isValid: true,
    messageError: "",
}

export const validatePriceInput = createSlice({
    name: "validatePriceInput",
    initialState: initialPriceInput,
    reducers: {
        isValidPrice(state, action){
            if(action.payload < 0){
                state.isValid = false;
                state.messageError = "Please enter price(ETH) > 0";

            }
            else{
                state.isValid = true;
                state.messageError = "";
            }
        }
    }
})


const initialMiniumBid = {
    isValid: true,
    messageError: "",
}

export const validateMiniumBid = createSlice({
    name: "validateMiniumBid",
    initialState: initialMiniumBid,
    reducers: {
        isValidMediumBid(state, action){
            if(action.payload < 0){
                state.isValid = false;
                state.messageError = "Please enter > 0";

            }
            else{
                state.isValid = true;
                state.messageError = "";
            }
        }
    }
})
export const validateFileInputAction = validateFileInput.actions;
export const validatePriceInputAction = validatePriceInput.actions;
export const validateMiniumBidAction = validateMiniumBid.actions;