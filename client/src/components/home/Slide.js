import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Divider } from "@mui/material";
import "./Slide.css";
import { HomepageValue } from "../../Context/HomePageContext"
import { NavLink } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = ({ title }) => {
    const { todaysDealData, itemInStoreData } = HomepageValue();
    if (title === "Today's Deal" && todaysDealData.length === 0) {
        return <h1>Loading</h1>
    }
    if (title === "Item in store" && itemInStoreData.length === 0) {
        return <h1>Loading</h1>
    }
    return (
        <div className="products_section">
            <div className="products_deal">
                <h3>{title}</h3>
                <button className="view_btn">View All</button>
            </div>
            <Divider />

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    title === "Today's Deal" && todaysDealData.map((e) => {

                        return (
                            <NavLink to={`./product/${e._id}`} key={e._id}>
                                <div className="products_items" >
                                    <div className="product_img">
                                        <img src={e.url} alt="product" />
                                    </div>
                                    <p className="products_name">{e.name.substr(0, 24)}...</p>
                                    <p className="products_offer" style={{ color: "#  007185" }}>Upto&nbsp;{e.discount_percentage}%</p>
                                    <p className="products_explore">{e.category.substr(0, 24)}...</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
                {
                    title === "Item in store" && itemInStoreData.map((e) => {

                        return (
                            <NavLink to={`./product/${e._id}`} key={e._id}>
                                <div className="products_items" >
                                    <div className="product_img">
                                        <img src={e.url} alt="product" />
                                    </div>
                                    <p className="products_name">{e.name.substr(0, 24)}...</p>
                                    <p className="products_offer" style={{ color: "#  007185" }}>Upto&nbsp;{e.discount_percentage}%</p>
                                    <p className="products_explore">{e.category.substr(0, 24)}...</p>
                                </div>
                            </NavLink>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Slide