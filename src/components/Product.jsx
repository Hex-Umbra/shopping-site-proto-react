import React from "react";
import NoteStar from "./NoteStar";

export default function Product({ img, name, note, price }) {
  return (
    <div className="grid grid-rows-2 justify-items-center">
      <div className="border-2 rounded-3xl block overflow-hidden">
        <img className="object-contain object-center" src={img} />
      </div>
      <div className="mt-6 h-4">
        <h4 className="font-bold ">{name}</h4>
        <div className="flex">
          <NoteStar/>
          <NoteStar/>
          <NoteStar/>
          <NoteStar/>
          <NoteStar/>
          <p className="font-extralight text-xs">{note}</p>
        </div>

        <p className="font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}
