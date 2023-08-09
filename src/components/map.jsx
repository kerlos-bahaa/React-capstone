import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

function SimpleMap({ lat, lng }) {
  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}

SimpleMap.propTypes = {
  lat: PropTypes.node.isRequired,
  lng: PropTypes.node.isRequired,
};

export default SimpleMap;
