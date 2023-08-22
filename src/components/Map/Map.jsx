import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div style={{ height: '400px', width: '600px' }}>
      <MapContainer center={coordinates} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;