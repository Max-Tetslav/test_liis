import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '@store/index';
import { getHotels } from '@store/redusers/hotels';
import getEndDate from '@utils/helpers/getEndDate';
import SearchInput from '@components/common/searchInput/SearchInput';
import cl from './SearchBox.module.scss';

const SearchBox: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchData = useAppSelector((state) => state.currentData);
  const [searchCity, setSearchCity] = useState(searchData.city);
  const [searchDate, setSearchDate] = useState(searchData.date);
  const [searchDays, setSearchDays] = useState(searchData.days);

  const endDate = getEndDate(searchDate, searchDays);

  const clickHandler = useCallback(() => {
    dispatch(
      getHotels({
        city: searchCity,
        fromDate: searchDate,
        toDate: endDate,
        days: searchDays,
      }),
    );
  }, [searchCity, searchDays, searchDate]);

  useEffect(() => {
    dispatch(
      getHotels({
        city: searchCity,
        fromDate: searchDate,
        toDate: endDate,
        days: searchDays,
      }),
    );
  }, []);

  return (
    <div className={cl.container}>
      <SearchInput
        label="Локация"
        setValue={setSearchCity}
        type="text"
        name="location"
        value={searchCity}
      />
      <SearchInput
        label="Дата заезда"
        setValue={setSearchDate}
        value={searchDate}
        type="date"
        name="date"
      />
      <SearchInput
        label="Колличество дней"
        setValue={setSearchDays}
        value={searchDays}
        name="days"
        type="number"
      />
      <Button
        className={cl.button}
        htmlType="button"
        block
        onClick={clickHandler}
      >
        Найти
      </Button>
    </div>
  );
};

export default SearchBox;
