import { createSlice } from "@reduxjs/toolkit";

const initialState=false

const IntroSetUp = createSlice({
    name:'introSlider',
    initialState,
    reducers:{
       doneIntro(state, action){
       return state=action.payload
       } 
    }
})

export const {doneIntro} = IntroSetUp.actions;
export const selectIntro = state =>
  state.name;
export default IntroSetUp.reducer;