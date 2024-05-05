import Banner from "../components/home/Banner";
import "./Home.css";
import SlideCarousel from "../components/home/SlideCarousel";
import { topTendiscountedProducts, topTwentyRatedProducts } from "../utils/ApiUtils";
import React, { useEffect, useState } from 'react'

function Home() {
  const [todaysDealData, setTodaysDealData] = useState([]);
  const [itemInStoreData, setItemInStoreData] = useState([]);
  const fetchTodaysDeal = () => {
    topTendiscountedProducts()
      .then((res) => {
        // console.log(res.data.msg);
        setTodaysDealData(res.data.msg);
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const itemInStore = () => {
    topTwentyRatedProducts()
      .then((res) => {
        // console.log(res.data.msg);
        setItemInStoreData(res.data.msg);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => {
    fetchTodaysDeal();
    itemInStore();
  }, []);

  return (
    <>
      <div className="home_section">
        <div className="banner_part">
          <Banner />
        </div>
        <div className="slide_part">
          <div className="left_slide">
            {/* <Slide title="Today's Deal" /> */}
            <SlideCarousel title={"Today's Deal"} data={todaysDealData} />
          </div>
          <div className="right_slide">
            <h4>Festive latest launches</h4>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
              alt="rightimg"
            />
          </div>
        </div>

        <SlideCarousel title={"Item in store"} data={itemInStoreData} />
      </div>
    </>
  );
}

export default Home;
