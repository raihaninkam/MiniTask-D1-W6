import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from '../redux/slices/surveySlices';
import todoReducer from '../redux/slices/todoSlices';

const store = configureStore({
    reducer: {
        surveyResult: surveyReducer,
        todo: todoReducer
    },
});

export default store;