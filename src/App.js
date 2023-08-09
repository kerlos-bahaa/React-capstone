import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './components/Main';
import Home from './components/Home';
import Detail from './components/Detail';
import { fetchCoutries } from './features/country/countrySlice';
import './index.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoutries());
  });

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/details" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
