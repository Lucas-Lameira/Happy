import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import local from '../images/local.svg';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={local} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Belém</strong>
                    <span>Pará</span>
                </footer>
            </aside>

            
            <Map 
                center={[-1.3063478, -48.4846413]}
                zoom={16}
                style={{ width:'100%', height:'100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size={32}  color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;