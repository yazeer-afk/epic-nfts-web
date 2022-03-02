import { FC } from 'react'
import { ethers } from 'ethers'
import epicNFT from '../util/EpicNFT.json'
import { CONTRACT_ADDRESS } from '../util/contract'

export interface MintNFTButtonProps {

}

export const MintNFTButton: FC<MintNFTButtonProps> = (props) => {

    const mintNFT = async () => {

        try {

            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum)
                const signer = provider.getSigner()

                const connectedContract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    epicNFT.abi,
                    signer
                )

                let nftTxn = await connectedContract.makeNFT()
                await nftTxn.wait()
                console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
            } else {
                console.log('No ethereum object found')
            }

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <button onClick={mintNFT} className='cta-button connect-wallet-button'>
            Mint NFT
        </button>
    )
}