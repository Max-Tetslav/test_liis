import { combineReducers } from '@reduxjs/toolkit';
import carouselReducer from './carousel';
import currentDataReducer from './currentData';
import hotelsReducer from './hotels';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  currentData: currentDataReducer,
  hotels: hotelsReducer,
  carousel: carouselReducer,
});

export default rootReducer;
