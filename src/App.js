// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/lib/players/YouTube";

function App() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  const slidesData = [
    {
      id: 1,
      url: "http://www.youtube.com/watch?v=q76bMs-NwRk",
      // label: 'Dolorem officiis temporibus.'
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=RKXB-rQZWzE",
      // label: 'Officia non provident dolor esse et neque.'
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=a2AGLLPV2Ak",
      // label: 'Ut recusandae vel vitae molestiae id soluta.'
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=lo8fFAVPGMo",
      // label: 'Qui vel consequatur recusandae illo repellendus.'
    },
  ];

  return (
    <div className="App">
      <div className="slider-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
              <ReactPlayer
                className="react-player"
                url={slide.url}
                width="100%"
                height="90vh"
                muted={false}
                controls={false}
                playing = {true}
              />
              {/* <img
                className="slick-slide-image"
                src={`https://picsum.photos/800/400?img=${slide.id}`}
              /> */}
              {/* <label className="slick-slide-label">{slide.label}</label> */}
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className="slick-slide" key={slide.id}>
                <img
                  className="slick-slide-image"
                  src={`https://picsum.photos/800/400?img=${slide.id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
