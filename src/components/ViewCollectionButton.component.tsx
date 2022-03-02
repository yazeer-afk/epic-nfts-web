import { FC } from 'react'

export interface ViewCollectionButtonProps {

}

const OPENSEA_URL = 'https://testnets.opensea.io/collection/yazeertestnft-gl2aokpscl'

export const ViewCollectionButton: FC<ViewCollectionButtonProps> = (props) => {

    return (
        <a href={OPENSEA_URL} className='opensea-link' >
            <button className='cta-button connect-wallet-button'>
                🌊  View Collection on OpenSea
            </button>
        </a>
    )
}