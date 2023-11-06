import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createUnitFormData from '../components/formUtils';

const initialState = {
  status: 'idle',
  error: null,
};

export const createUnit = createAsyncThunk(
  'unitForm/create',
  async (unitData) => {
    const userId = JSON.parse(sessionStorage.getItem('logged_user')).id;

    if (!userId) {
      throw new Error('User is not logged in');
    }

    const formData = createUnitFormData(unitData, userId);

    const response = await axios.post('http://127.0.0.1:3000/units/', formData);

    if (response.status !== 200) {
      throw new Error('Error adding unit');
    }

    response.data.formData = formData;
    return response.data;
  },
);

const unitFormSlice = createSlice({
  name: 'unitForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUnit.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(createUnit.fulfilled, (state) => ({
        ...state,
        status: 'succeeded',
        error: null,
      }))
      .addCase(createUnit.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default unitFormSlice.reducer;