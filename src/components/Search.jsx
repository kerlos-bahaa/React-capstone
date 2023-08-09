import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { filterCountry } from '../features/country/countrySlice';

const Seach = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState('');

  return (
    <div>
      <input
        className="inpute"
        type="search"
        onChange={(e) => {
          dispatch(filterCountry(e.target.value));
          setResult(e.target.value);
        }}
        value={result}
        placeholder="Search"
      />
    </div>
  );
};

export default Seach;
