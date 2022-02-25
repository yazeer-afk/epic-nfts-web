import React, { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer.component'
import { ConnectWalletButton } from './components/ConnectWalletButton.component'

function App() {

  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletConnected = async () => {

    const { ethereum } = window;

    if (ethereum) {
      console.log("We have the ethereum obect. les goo")
    } else {
      console.log('Make sure you have metamask installed!')
      return;
    }

    const accounts = await ethereum.request({method: 'eth_accounts'})

    if (accounts.length > 0) {
      const account = accounts[0]
      setCurrentAccount(account)
    } else {
      console.log('No authorized accounts found!')
    }

  }

  const renderButton = () => {
    if (currentAccount) {
      return (
        <></>
      )
    } else {
      return (
        <ConnectWalletButton setCurrentAccount={setCurrentAccount} />
      )
    }
  }

  useEffect(() => {
    checkIfWalletConnected()
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          {renderButton()}          
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
