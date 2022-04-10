import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavouriteHotel } from '@models/hotels';

interface ISearchData {
  city: string;
  date: string;
  days: string;
}

interface ICurrentDataState extends ISearchData {
  favourites: IFavouriteHotel[];
}

const initialState: ICurrentDataState = {
  city: 'Москва',
  date: new Date().toLocaleDateString().split('.').reverse().join('-'),
  days: '1',
  favourites: JSON.parse(localStorage.getItem('favourites') as string) || [],
};

const currentDataSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    updateCurrentData: (state, action: PayloadAction<string[]>) => {
      const [city, date, days] = action.payload;

      state.city = city;
      state.date = date;
      state.days = days;
    },
    addFavourite: (state, action: PayloadAction<IFavouriteHotel>) => {
      state.favourites.push(action.payload);
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      state.favourites = state.favourites.filter(
        (item) => item.hotelId !== action.payload,
      );
    },
  },
});

export const { updateCurrentData, addFavourite, removeFavourite } =
  currentDataSlice.actions;
export default currentDataSlice.reducer;
