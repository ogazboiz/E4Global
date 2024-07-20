
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDID03XxSlenX8WgfVxeVM6Y13yAbI2aq8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
};

export default MapComponent;
