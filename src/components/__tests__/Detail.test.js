import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mockDetails from '../mockDetails';
import Detail from '../Detail';
import { searchDetails } from '../../features/country/countrySlice';

jest.mock('../map');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => (
    {
      pathname: '/details',
      search: '',
      hash: '',
      state: { country: 'Turks and Caicos Islands' },
      key: '6ma6yc3n',
    }
  ),
}));

const reducer = (state = {
  country: { country: mockDetails, countryDetails: mockDetails },
}) => state;

describe('should test details page', () => {
  it('should test the snapshot of details page', async () => {
    jest.fn(() => searchDetails.mockReturnValue({ countryDetails: mockDetails }));
    const store = configureStore({ reducer });
    const navb = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Detail />
        </Provider>
      </MemoryRouter>,
    ).toJSON();

    expect(navb).toMatchSnapshot();
  });
});
