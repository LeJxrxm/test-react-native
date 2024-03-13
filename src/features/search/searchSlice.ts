import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface SearchState {
    value: string
}

const initialState: SearchState = {
    value: ''
};

export const searchSlice =  createSlice({
   name: 'search',
   initialState,
    reducers: {
       set: (state, action: PayloadAction<string>): void => {
           state.value = action.payload;
       }
    }
});

export const {set} = searchSlice.actions;

export const selectSearch = (state: any) => state.search.value;

export default searchSlice.reducer;
