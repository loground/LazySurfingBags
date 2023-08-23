import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Map = () => {
    const mapStyles = {
        height: "82vh",
        width: "100%",
      };
    
      const defaultCenter = {
        lat: -8.815915780161824,
        lng: 115.15261094596273,
      };


  return (
    <div>
    <Header/>
    <LoadScript googleMapsApiKey="AIzaSyB9jYHIzcF-UGfP9rBGpGzGkj4KxM22rAs">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={20}
        center={defaultCenter}
      >
      </GoogleMap>
    </LoadScript>
    <Footer/>
    </div>
  );
};

export default Map;