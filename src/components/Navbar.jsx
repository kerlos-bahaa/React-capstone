import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconArrowLeft from './Arrow';
import Seach from './Search';
import IconMicFill from './Mic';
import IconCog from './IconCog';

const Navbar = () => {
  const data = useSelector((state) => state.country);

  return (
    <header className="head">
      <div className={!data.isLoading ? 'header ' : 'header'}>
        {data.isLoading ? <Link to="/"><IconArrowLeft /></Link> : ''}
        <div className={!data.isLoading ? 'views' : 'views dax'}>
          <p>{data.isLoading ? 'town/city views' : 'Most views'}</p>
          {!data.isLoading ? (
            <div className="sec">
              <Seach />
              {' '}
            </div>
          ) : ''}
        </div>
        <div className="mic">
          <IconMicFill />
          <IconCog />
        </div>
      </div>
      <p className="filter-by">STATE BY COUNTRY</p>
    </header>
  );
};

export default Navbar;
