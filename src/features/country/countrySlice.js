import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const api = 'https://restcountries.com/v3.1/all';
const apiCurrencyUrl = 'https://countriesnow.space/api/v0.1/countries/currency';

const initialState = {
  country: [],
  countrySecond: [],
  countryDetails: [],
  isLoading: false,
};

export const fetchCoutries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const data = await axios.get(api);
    const dataApi = data;
    return dataApi.data;
  } catch (err) {
    return err;
  }
});

export const fetchCoutriesCurrency = createAsyncThunk('countriesCurrency/fetchcountriesCurrency', async () => {
  try {
    const data = await axios.get(apiCurrencyUrl);
    const dataApi = data;
    return dataApi.data;
  } catch (err) {
    return err;
  }
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    filterCountry: (state, action) => {
      const filteredState = [...state.countrySecond];
      const receivedCountry = action.payload.toLowerCase();
      const data = filteredState.filter((item) => (
        item.name.common.toLowerCase().includes(receivedCountry)));
      if ((data.length % 2) === 0 || data.length === 1) {
        state.country = [];
        state.country = filteredState;
        state.country = data;
      }
    },
    searchDetails: (state, action) => {
      const filteredSate = [...state.country];
      state.countryDetails = [];
      let val = [];
      const data = filteredSate.filter((item) => item.name.common === action.payload);
      if (data.length > 0) {
        val.push(data);
        state.countryDetails = data;
      } else {
        val = [];
      }
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCoutries.fulfilled, (state, action) => {
      const country = action.payload;
      country.forEach((element) => {
        state.country.push(element);
        state.countrySecond = state.country;
      });
    });
  },
});

export const {
  filterCountry, searchDetails, searchDetailsCurrenc, loading,
} = countrySlice.actions;
export default countrySlice.reducer;
