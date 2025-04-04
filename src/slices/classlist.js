import { createSlice } from "@reduxjs/toolkit";

const initialState = {                                
    classes: {
        ownClasses: [],
        joinedClasses: []
    },                                
    loading: false,                                     
};

const classSlice = createSlice({
  name: "classes",
  initialState: initialState,

  reducers: {                                                  
    setClasses(state, action) {
      state.classes = action.payload; 
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    resetState(state) {
        state.classes = {
            ownClasses: [],
            joinedClasses: []
        };
        state.loading = false;
    }
  },
});

export const { setClasses, setLoading, resetState } = classSlice.actions;

export default classSlice.reducer;
