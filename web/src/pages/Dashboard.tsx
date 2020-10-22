import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle, FiMapPin, FiPower  } from 'react-icons/fi';

import '../styles/pages/dashboard.css';
import local from '../images/local.svg';

import DashboardTwo from '../components/Sidebar_2';


function Dashboard () {
  return (
    <div className="dashboard-container">
      <aside>
        <img src={local} alt=""/>

        <div className="btn-group">
          <Link to="" className="yellow-btn">
            <FiMapPin size={24} color=" #0089A5" />            
          </Link>
          
          <Link to="" className="blue-btn" >
            <FiAlertCircle size={24} color="#FFF" />
          </Link>
        </div>

        <Link to="" className="blue-btn" >
          <FiPower size={24} color="#FFF"/>
        </Link>
      </aside>
      <section>
        <header>
          <h2>Orfanatos Cadastrados</h2>
          <span>2 orfanatos</span>
        </header>
        <main>
          {/* <DashboardTwo />          */}
        </main>
      </section>

    </div>
  );
}

export default Dashboard;