import React from 'react'
import Google from '../../assets/images/google.png'
import Shopify from '../../assets/images/shopify.png'
import Slack from '../../assets/images/slack.png'
import Dropbox from '../../assets/images/dropbox.png'
import Atlassian from '../../assets/images/atlassian.png'

import { BrandContainer } from './Style.js'


const Brand = () => {
    return (
        <BrandContainer>
            <div className="gpt3__brand section__padding">
                <div>
                    <img src={Google} alt="google" />
                </div>
                <div>
                    <img src={Shopify} alt="shopify" />
                </div>
                <div>
                    <img src={Slack} alt="slack" />
                </div>
                <div>
                    <img src={Dropbox} alt="dropbox" />
                </div>
                <div>
                    <img src={Atlassian} alt="Atlassian" />
                </div>
            </div>
        </BrandContainer>
    )
}

export default Brand
