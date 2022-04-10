import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';
import { IHotel, IPayloadGetHotels, IResponseHotels } from '@models/hotels';
import { getHotelsFail, getHotelsSuccess } from '@store/redusers/hotels';
import { updateCurrentData } from '@store/redusers/currentData';
import axios from 'axios';

const getHotels = (city: string, startDate: string, endDate: string) => {
  return axios.get<{ data: IHotel[] }>(
    `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${startDate}&checkOut=${endDate}&limit=10`,
  );
};

function* workGetHotels(action: { type: string; payload: IPayloadGetHotels }) {
  const { city, fromDate, toDate, days } = action.payload;

  try {
    const hotels = (yield call(
      getHotels,
      city,
      fromDate,
      toDate,
    )) as IResponseHotels;

    yield put(updateCurrentData([city, fromDate, days]));
    yield put(getHotelsSuccess(hotels.data));
  } catch (error) {
    yield put(getHotelsFail());
  }
}

function* hotelsSaga(): Generator<StrictEffect> {
  yield takeEvery('hotels/getHotels', workGetHotels);
}

export default hotelsSaga;
