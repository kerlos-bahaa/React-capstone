import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import axios from 'axios';
import mockData from '../mockData';
import Navbar from '../Navbar';

jest.mock('axios');

const reducer = (state = {
  country: { country: mockData },
}) => state;

const store = configureStore({ reducer });

describe('should test the filterung functionality', () => {
  it('should test the snapshot of search component', async () => {
    await axios.get.mockResolvedValue({ data: mockData });
    const navb = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(navb).toMatchSnapshot();
  });
});
