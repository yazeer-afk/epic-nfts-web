import React, { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer.component'
import { ConnectWalletButton } from './components/ConnectWalletButton.component'
import { MintNFTButton } from './components/MintNFTButton.component'
import { checkNetwork, setupMintListener } from './util/contract';
import { Loader } from './components/Loader.component'

function App() {

  const [currentAccount, setCurrentAccount] = useState("")
  const [minting, setMinting] = useState(false)

  const checkIfWalletConnected = async () => {

    const { ethereum } = window;

    if (ethereum) {
      console.log("We have the ethereum obect. les goo")
    } else {
      console.log('Make sure you have metamask installed!')
      return;
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length > 0) {
      const account = accounts[0]
      setCurrentAccount(account)
      checkNetwork()
      setupMintListener()
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
          {currentAccount && !minting && <MintNFTButton loading={minting} setLoading={setMinting} />}
          {minting &&
            <div>
              <Loader />
            </div>
          }
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
