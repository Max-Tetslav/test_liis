import { createSlice } from '@reduxjs/toolkit';
import img1 from '@assets/img/img1.png';
import img2 from '@assets/img/img2.png';
import img3 from '@assets/img/img3.png';
import img4 from '@assets/img/img4.png';

const initialState = {
  list: [
    {
      path: img1,
      id: 0,
    },
    {
      path: img2,
      id: 1,
    },
    {
      path: img3,
      id: 2,
    },
    {
      path: img4,
      id: 3,
    },
    {
      path: img1,
      id: 4,
    },
    {
      path: img2,
      id: 5,
    },
    {
      path: img3,
      id: 6,
    },
    {
      path: img4,
      id: 7,
    },
  ],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
});

export default hotelsSlice.reducer;
