import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

const surveySlice = createSlice({
  name: 'surveyResult',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    removeData: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    resetData: (state) => {
      state.data = [];
    }
  }
});

// Export actions
export const { addData, removeData, resetData } = surveySlice.actions;

// Export selectors
export const selectAllSurveyData = (state) => state.surveyResult?.data || [];
export const selectSurveyStatus = (state) => state.surveyResult.status;

export default surveySlice.reducer;