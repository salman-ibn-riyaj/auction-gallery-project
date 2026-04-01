import React from "react";
import bannerImg from "../../assets/Banner-min.jpg";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="text-white pb-3">
        <div className="text-left pt-6 md:pt-38 pl-20 space-y-3">
          <h2 className="font-semibold text-3xl">
            Bid on Unique Items from <br /> Around the World
          </h2>

          <p className="text-gray-400">
            Discover rare collectibles, luxury goods, and vintage <br />{" "}
            treasures in our curated auctions
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-4xl">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
