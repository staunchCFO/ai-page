import React from 'react'

import {
    Blog,
    Features, 
    Footer, 
    Header,
    Possibility,
    WhatGPT3
} from '../../containers'

import {
    Cta,
    Navbar, 
    Brand
} from '../../components'

import { HomeContainer } from './Style.js'


const Home = () => {
    return (
        <HomeContainer>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </HomeContainer>
    )
}

export default Home
