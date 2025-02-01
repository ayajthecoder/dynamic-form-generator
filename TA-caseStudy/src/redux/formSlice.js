import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    resetFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;