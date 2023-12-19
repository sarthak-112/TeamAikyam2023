import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '12%' }}>
        <div style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 71, fontFamily: 'Canva Sans', fontWeight: 400, wordWrap: 'break-word' }}>AIKYAM: EVALUATE</span>
          <span style={{ fontSize: 71, fontFamily: 'Canva Sans', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}> , HEAL & THRIVE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 200 }}>
          <Link to="/sign-in-up" className='get-started-btn' style={{ paddingLeft: 45, paddingRight: 45, paddingTop: 35, paddingBottom: 35, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', cursor: 'pointer', borderRadius: '1rem', marginRight: '20px' }}>
            <div style={{ color: 'white', fontSize: 35, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', wordWrap: 'break-word' }}>Get STARTED</div>
          </Link>
          <Link to="/emergency" className='emergency-btn' style={{ paddingLeft: 55, paddingRight: 55, paddingTop: 35, paddingBottom: 35, background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', cursor: 'pointer', borderRadius: '1rem' }}>
            <div style={{ fontSize: 35, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', wordWrap: 'break-word' }}>EMERGENCY</div>
          </Link>
        </div>
        <div className='header-row-4' style={{ textAlign: 'center' }}>
          <h1>Crisis Helpline</h1>
          <p>For <span className='emergency'>emergency situations</span>, call onto the designated emergency phone number.</p>
          <span className='phone'>(022) 2371-5050 </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
