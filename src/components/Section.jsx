import React from "react";

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
      <span className="absolute left-1/2 top-1/4">
        <svg
          width="56px"
          height="56px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.15"
            d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
            fill="#000000"
          />
          <path
            d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="absolute right-10 top-7">
        <svg
          width="104px"
          height="104px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.15"
            d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
            fill="#000000"
          />
          <path
            d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </section>
  );
}
