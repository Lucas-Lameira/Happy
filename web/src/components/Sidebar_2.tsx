import React from 'react' 
import {Map, TileLayer, Marker} from 'react-leaflet'
import MapIcon from '../utils/MapIcon'
import {FiTrash, FiEdit} from 'react-icons/fi'

import '../styles/components/sidebarTwo.css';


function SidebarTwo () {
  return (
    <div className="orphanage-item">
    <Map
      center={[-1.31072,-48.480256]}
      style={{ width: '100%', height: 220, borderRadius: '20' }}
      zoom={15}
      dragging={false}
      touchZoom={false}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      /* onclick={handleMapClick} */
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker interactive={false} icon={MapIcon} position={[-1.31072,-48.480256]}/>
    </Map>

  <footer>
    <h2>Nome do orfanato</h2>
    <div className="utils-btn">
      <button>
        <FiEdit size={24} color="#15C3D6"/>
      </button>
      <button>
        <FiTrash size={24} color="#15C3D6"/>
      </button>
    </div>
  </footer>   
  </div> 
  )
}

export default SidebarTwo;