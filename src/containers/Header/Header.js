import React from 'react'
import People from '../../assets/images/people.png';
import Ai from '../../assets/images/ai.png';

import { HeaderContainer } from './Style.js'


const Header = () => {
    return (
        <HeaderContainer>
            <div className="gpt3__header section__padding" id="header">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                        Let&apos;s Build Something amazing with GPT-3 OpenAI
                    </h1>
                    <p>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
                        exercise blessing. Indulgence way everything joy alteration boisterous the 
                        attachment. Party we years to order allow asked of.
                    </p>

                    <div className="gpt3__header-content__input">
                        <input type="email" placeholder="Your Email Address" />
                        <button type="button">Get Started</button>
                    </div>

                    <div className="gpt3__header-content__people">
                        <img src={People} />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                
                <div className="gpt3__header-image">
                    <img src={Ai} />
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header
