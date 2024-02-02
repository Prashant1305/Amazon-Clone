import React from 'react'
import Banner from '../components/home/Banner'
import "./Home.css"
import Slide from '../components/home/Slide'
import NewNav from '../components/newNavbar/NewNav.jsx'

function Home() {
    return (
        <>
            <NewNav />
            <div className='home_section'>
                <div className='banner_part'>
                    <Banner />
                </div>
                <div className='slide_part'>
                    <div className='left_slide'>
                        <Slide title="Today's Deal" />
                    </div>
                    <div className='right_slide'>
                        <h4>Festive Launches</h4>
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg' />
                        <a href="#">See More </a>
                    </div>
                </div>
                <Slide title="Item in store" />

            </div>
        </>
    )
}

export default Home