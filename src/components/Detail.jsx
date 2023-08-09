import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchDetails, loading } from '../features/country/countrySlice';
import SimpleMap from './map';
import IconArrowRightCircle from './IconArrowRightCircle';

const Detail = () => {
  const loc = useLocation();
  const dispatch = useDispatch();
  const { country } = loc.state;
  const data = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(searchDetails(country));
    dispatch(loading(true));
  }, [country, dispatch]);

  return (
    <div>
      {
                data.countryDetails.map((item) => (
                  <div className="details" key={item.name.official}>
                    <div className="dtls">
                      <div className="map">
                        <h3 className="flag-name">
                          {item.name.common.toUpperCase()}
                          <img src={item.flags.png !== undefined ? item.flags.png : 'Flag not avaible'} alt={item.name.official} />
                        </h3>
                        <SimpleMap lat={item.latlng[0]} lng={item.latlng[1]} />
                      </div>
                      <div>
                        <ul className="ul">
                          <li className="crt-details li">COUNTRY DETAILS</li>
                          <li className="liste li">
                            <p>CAPITAL </p>
                            {' '}
                            <p>
                              {item.capital[0] !== undefined ? item.capital[0] : ''}
                              {' '}
                              <IconArrowRightCircle />
                            </p>
                          </li>
                          <li className="pair-red liste li">
                            <p>AREA </p>
                            <p>
                              {' '}
                              {item.area}
                              {' '}
                              km2
                              {' '}
                              <IconArrowRightCircle />
                            </p>
                          </li>
                          <li className="liste li">
                            <p>POPULATION </p>
                            <p>
                              {item.population}
                              {' '}
                              <IconArrowRightCircle />
                            </p>
                          </li>
                          <li className="pair-red liste li">
                            <p>CONTINENT</p>
                            <p>
                              {' '}
                              {item.continents[0] !== undefined ? item.continents[0] : ''}
                              {' '}
                              <IconArrowRightCircle />
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
            }
    </div>
  );
};

export default Detail;
