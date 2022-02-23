import React from 'react';
import './App.css';
import { Footer } from './components/Footer.component'

function App() {

  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  return (
    <div className='App'>
      <div className='container'>
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          {renderNotConnectedContainer()}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
