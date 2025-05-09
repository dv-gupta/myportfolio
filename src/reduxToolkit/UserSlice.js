import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:null,
}

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
    },
  });

  export const {setUser} = UserSlice.actions;
  export const getUserData = state=> state.user;

export default UserSlice.reducer;