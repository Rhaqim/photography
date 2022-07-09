import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ img }) => {
  return (
    <div className="relative">
      <Image src={img} alt="/" className="w-full h-full" layout="responsive" />
      <div className="absolute flex justify-center items-center top-0 right-0 left-0 bottom-0 hover:bg-black/50 group">
        {/* Overlay */}
        <p className="text-gray-300 hidden  group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
