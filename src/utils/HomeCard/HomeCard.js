import Image from "next/image";
import React from "react";
import logo from "../../app/assets/04.jpg";
const HomeCard = () => {
  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <Image width={0} height={0} src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
