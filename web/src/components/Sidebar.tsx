import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import local from '../images/local.svg';
import '../styles/components/sidebar.css'

function Sidebar () {
    const { goBack } = useHistory();
    
    return (
        <aside className="app-sidebar">
        <img src={local} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}

export default Sidebar