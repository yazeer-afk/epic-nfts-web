import { Dispatch, FC, SetStateAction } from 'react'

export interface ConnectWalletButtonProps {
    setCurrentAccount: Dispatch<SetStateAction<any>>
}

export const ConnectWalletButton: FC<ConnectWalletButtonProps> = ({setCurrentAccount}) => {

    const connectWallet = async () => {
        try {
            const {ethereum} = window;
            
            if (!ethereum) {
                alert("Install metamask!")
                return
            }
            
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            console.log(accounts)
            setCurrentAccount(accounts[0])
            
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <button className="cta-button connect-wallet-button" onClick={connectWallet}>
            Connect to Wallet
        </button>
    )
}