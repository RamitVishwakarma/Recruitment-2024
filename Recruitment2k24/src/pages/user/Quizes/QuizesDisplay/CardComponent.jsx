import React from "react";
import arrRight from "../../../../assets/arrRight.svg";
import { Link } from "react-router-dom";

export default function Components({ img, imgBgColor, text, domain }) {
  return (
    <Link to={`/user/showquiz/${domain}`}>
      <div className="flex w-7/12 shadow-lg p-3 rounded-xl bg-text-box gap-4 cursor-pointer homePageComponent">
        <div
          className={`w-12 h-12 rounded-full ${imgBgColor} flex items-center justify-center`}>
          <img className="w-6 h-6" src={img} />
        </div>
        <div className="flex font-bold w-40 items-center">
          <div>{text}</div>
        </div>
        <button className="pl-6 flex items-center cursor-pointer ">
          <img className="w-6" src={arrRight} />
        </button>
      </div>
    </Link>
  );
}