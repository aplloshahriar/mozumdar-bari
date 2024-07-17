"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../app/assets/m4.PNG";
import img2 from "../../app/assets/mozum1.PNG";
import img3 from "../../app/assets/mozum3.PNG";
import img4 from "../../app/assets/01.jpg";
import img5 from "../../app/assets/02.jpg";
import img6 from "../../app/assets/03.png";

import Image from "next/image";

const Banner = (interval) => {
  return (
    <div className="">
      <Carousel infiniteLoop={true} autoPlay={true}>
        <div>
          <Image width={0} height={0} src={img4} alt="2" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image width={0} height={0} src={img5} alt="2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image width={0} height={0} src={img6} alt="2" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
