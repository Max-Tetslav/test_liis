import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthInitialState {
  status: boolean;
  email: string | null;
  password: string | null;
}

interface ILoginData {
  email: string;
  password: string;
}

const initialState: IAuthInitialState = {
  status: false,
  email: localStorage.getItem('userEmail'),
  password: localStorage.getItem('userPassword'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILoginData>) => {
      state.status = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      localStorage.setItem('userEmail', action.payload.email);
      localStorage.setItem('userPassword', action.payload.password);
    },
    logout: (state) => {
      state.status = false;
      state.email = null;
      state.password = null;
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
