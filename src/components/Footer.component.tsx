import { FC } from 'react'
import { TwitterLogo } from './TwitterLogo.component'

export interface FooterProps {

}

export const Footer: FC<FooterProps> = (props) => {

    const TWITTER_HANDLE = '_buildspace';
    const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
    const OPENSEA_LINK = '';
    const TOTAL_MINT_COUNT = 50;

    return (
        <div className="footer-container">
            {/* <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} /> */}
            <TwitterLogo />
            <a
                className="footer-text"
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
            >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
    )
}