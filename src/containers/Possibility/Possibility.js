import React from 'react'
import PossibilityImg from "../../assets/images/possibility.png"
import {PossibilityContainer} from './Style.js'


const Possibility = () => {
    return (
        <PossibilityContainer>
            <div className="gpt3__possibility section__padding" id="possibility">
                <div className="gpt3__possibility-image">
                    <img src={PossibilityImg} alt="possibility" />
                </div>
                <div className="gpt3__possibility-content">
                    <h4>Request Early Access To Get Started</h4>
                    <h1 className="gradient__text">
                        The possibilities are beyond your imagination
                    </h1>
                    <p>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
                        Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>
                    <h4>Request Early Access To Get Started</h4>
                </div>
            </div>
        </PossibilityContainer>
    )
}

export default Possibility
