import local from '../images/local.svg';
import Leaflet from 'leaflet';

const MapIcon = Leaflet.icon({
    iconUrl: local,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  export default MapIcon;