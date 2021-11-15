import React from 'react'
import { FeatureContainer } from './Style.js'


const Feature = ({ title, text }) => (
    <FeatureContainer>
        <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className="gpt3__features-container_feature-text">
            <p>{text}</p>
        </div>
        </div>
    </FeatureContainer>
);

export default Feature
