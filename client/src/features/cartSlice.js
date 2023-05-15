// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import cartService from "./cartService";

// // export const getGoal = createAsyncThunk('goal/getGoal', async(_,thunkAPI) => {
// //     try{
// //         const token = thunkAPI.getState().auth.cart.token;
// //         return await cartService.getGoal(token);
// //     }
// //     catch(error){
// //         const message = (error.response && error.response.data && error.response.data.message)
// //                         || error.message || error.toString()
// //         return thunkAPI.rejectWithValue(message);
// //     }
// // })

// export const setCart = createAsyncThunk('cart/setCart', async(data,thunkAPI) => {
//     try{
//         // const token = thunkAPI.getState().auth.cart.token;
//         // console.log(token);
//         // console.log(data)
//         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTllMzA1MGM3OTVhN2FkZGRkYTE0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjQyNjIxMCwiZXhwIjoxNjc1MDE4MjEwfQ.lwNCfzeF9O9S-McnVKAevad7vvMxhZwDZ-8rBEGgLx8'
//         return await cartService.setCart(data, token);
//     }
//     catch(error){
//         const message = (error.response && error.response.data && error.response.data.message)
//                         || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message);
//     }
// })

// // export const deleteGoal = createAsyncThunk('goal/deleteGoal', async(id,thunkAPI) => {
// //     try{
// //         const token = thunkAPI.getState().auth.cart.token;
// //         return await cartService.deleteGoal(id, token);
// //     }
// //     catch(error){
// //         const message = (error.response && error.response.data && error.response.data.message)
// //                         || error.message || error.toString()
// //         return thunkAPI.rejectWithValue(message);
// //     }
// // })

// const initialState = {
//     carts: [],
//     isLoading: false,
//     isSuccess: false,
//     isError: false,
//     message: false
// }

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers:{
//         reset: (state) => initialState
//     },
//     extraReducers: (builder) => {
//         builder
//         .addCase(setCart.pending, (state) => {
//             state.isLoading = true;
//         })
//         .addCase(setCart.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isSuccess = true;
//             state.carts.push(action.payload)
//         })
//         .addCase(setCart.rejected, (state, action) => {
//             state.isLoading = false;
//             state.isError = true;
//             state.message = action.payload;
//         })
//         // .addCase(getGoal.pending, (state) => {
//         //     state.isLoading = true;
//         // })
//         // .addCase(getGoal.fulfilled, (state, action) =>{
//         //     state.isLoading = false;
//         //     state.isSuccess = true;
//         //     state.goals = (action.payload)
//         // })
//         // .addCase(getGoal.rejected, (state, action) => {
//         //     state.isLoading = false;
//         //     state.isError = true;
//         //     state.message   = action.payload;
//         // })

//         // .addCase(deleteGoal.pending, (state) => {
//         //     state.isLoading = true;
//         // })
//         // .addCase(deleteGoal.fulfilled, (state, action) =>{
//         //     state.isLoading = false;
//         //     state.isSuccess = true;
//         //     state.goals = state.goals.filter(
//         //         (goal) => goal._id !== action.payload._id)
//         // })
//         // .addCase(deleteGoal.rejected, (state, action) => {
//         //     state.isLoading = false;
//         //     state.isError = true;
//         //     state.message = action.payload;
//         // })

//     }
// })

// export const {reset} = cartSlice.actions;
// export default cartSlice.reducer;



import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.quantity * action.payload.price
    },

    reset: (state) => {  
        state.quantity = 0;
        state.products = [];
        state.total = 0;
    },
    
  },
 
});


export const { addProduct, reset } = cartSlice.actions;

// pull the cart from redux dataLayer
export const selectCart = (state) => state.cart;


export default cartSlice.reducer;

