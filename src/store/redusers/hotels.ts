import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHotel, IPayloadGetHotels } from '@models/hotels';

interface IHotelsInitialState {
  list: IHotel[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: IHotelsInitialState = {
  list: [],
  isLoading: false,
  isError: false,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    getHotels: (state, payload: PayloadAction<IPayloadGetHotels>) => {
      state.isLoading = true;
    },
    getHotelsSuccess: (state, action: PayloadAction<IHotel[]>) => {
      state.list = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
    getHotelsFail: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const { getHotels, getHotelsFail, getHotelsSuccess } =
  hotelsSlice.actions;
export default hotelsSlice.reducer;
