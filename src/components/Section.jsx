import React from "react";
import TwinkleStar from "./TwinkleStar.jsx";

export default function Section() {
  return (
    <section className="max-w-full bg-[#F2F0F1] min-h-[663px] relative">
      <div className=" h-full w-5/12 py-8 px-4 ml-20">
        <div className="mt-16">
          <h1 className="text-6xl font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="py-4 font-extralight">
            Browse through our diverse range of meticulously crafted garments,
            desgined to bring out your individuality and cater to your sense of
            style
          </p>
        </div>
        <button className="rounded-full bg-black text-white text-center w-[210px] h-[52px] py-4 px-14 mt-4 mb-4">
          Shop Now
        </button>
        <div className="mt-5 flex">
          <div className="px-3">
            <h2 className="font-extrabold text-3xl">200+</h2>
            <p className="font-extralight">International Brands</p>
          </div>
          <div className="px-3 border-l-2 border-r-2">
            <h2 className="font-extrabold text-3xl">2000+</h2>
            <p className="font-extralight">High-quality products</p>
          </div>
          <div className="px-3">
            <h2 className="font-extrabold text-3xl">30,000+</h2>
            <p className="font-extralight">Happy Customers</p>
          </div>
        </div>
      </div>
      <TwinkleStar/>
    </section>
  );
}
