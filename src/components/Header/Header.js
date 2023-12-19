import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div style={{ width: '100%', height: '100%', position: 'relative',  display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '12%' }}>
        <div style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 71, fontFamily: 'Jomolhari', fontWeight: 400, wordWrap: 'break-word' }}>AIKYAM: EVALUATE</span>
          <span style={{ fontSize: 71, fontFamily: 'Jomolhari', fontWeight: 400, textTransform: 'uppercase', wordWrap: 'break-word' }}> , HEAL & THRIVE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 200 }}> {/* Increased marginBottom to 40 */}
          <div style={{ paddingLeft: 45, paddingRight: 45, paddingTop: 35, paddingBottom: 35, background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', marginRight: 20 }}>
            <div style={{ color: 'black', fontSize: 35, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', wordWrap: 'break-word' }}>Get STARTED</div>
          </div>
          <div style={{ paddingLeft: 55, paddingRight: 55, paddingTop: 35, paddingBottom: 35, background: 'white', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div style={{ color: 'black', fontSize: 35, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', wordWrap: 'break-word' }}>EMERGENCY</div>
          </div>
        </div>
        <div className='header-row-4' style={{ textAlign: 'center' }}>
          <h1>Crisis Helpline</h1>
          <p>For <span className='emergency'>emergency situations</span>, call onto the designated emergency phone number.</p>
          <span className='phone'>+91 3598435989</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
