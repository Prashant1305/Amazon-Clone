import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./Banner.css";
import { getAllBanner } from "../../utils/ApiUtils";

function Banner() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchBannerData = () => {
    // try {
    //     getAllBanner();
    //     setIsLoading(true);
    //     const response = await fetch(`${baseUrl}/api/banner`);
    //     if (response.status == 200) {
    //         const response_data = await response.json();
    //         setData(response_data.msg);
    //         setIsLoading(false);
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
    getAllBanner()
      .then((res) => {
        // console.log(res.data.msg);
        setData(res.data.msg);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBannerData();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Carousel
      className="carasousel"
      animation="slide"
      indicators={false}
      navButtonAlwaysVisible={true}
    >
      {data.map((item) => {
        return (
          <img
            src={item.url}
            key={item._id}
            alt="Failed to load"
            className="banner_img"
          />
        );
      })}
    </Carousel>
  );
}

export default Banner;
