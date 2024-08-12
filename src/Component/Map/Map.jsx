import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const MapComponent = ({ address }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeocode = async () => {
      if (!address) return;
      
      setLoading(true);
      try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
          params: {
            address: address,
            key: "AIzaSyDID03XxSlenX8WgfVxeVM6Y13yAbI2aq8",
          },
        });

        if (response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          setLocation({ lat, lng });
        } else {
          setError('No results found');
        }
      } catch (error) {
        setError('Geocoding error: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeocode();
  }, [address]);

  const center = location || { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDID03XxSlenX8WgfVxeVM6Y13yAbI2aq8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {loading && <div>Loading map...</div>}
        {error && <div>Error: {error}</div>}
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
