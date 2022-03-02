import { ethers } from "ethers"
import EpicNFT from './EpicNFT.json'

export const CONTRACT_ADDRESS = '0xAb69c0469E1902761661984d8ff77e7DC1c4D348'

export const setupMintListener = () => {

    try {
        const { ethereum } = window

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const connectedContract = new ethers.Contract(
                CONTRACT_ADDRESS,
                EpicNFT.abi,
                signer
            )

            connectedContract.on('NewEpicNFTMinted', (from, tokenId) => {
                console.log(from, tokenId.toNumber())
                alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
            })
        }
    } catch (err) {
        console.log(err)
    }

}

export const checkNetwork = async () => {

    try {
        const { ethereum } = window
        const rinkebyChainId = '0x4'

        const chainId = await ethereum.request({method: 'eth_chainId'})

        if (chainId !== rinkebyChainId) {
            alert('Connect to Rinkeby Test Network!')
        } else {
            console.log('connected to rinkeby test network')
        }
    } catch (err) {
        console.log(err)
    }

}