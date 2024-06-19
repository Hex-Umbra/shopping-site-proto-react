import React from "react";
import Product from "./Product.jsx";

export default function ProductsSection({
  sectionName,
  img1,
  img2,
  img3,
  img4,
  name1,
  name2,
  name3,
  name4,
  note1,
  note2,
  note3,
  note4,
  price1,
  price2,
  price3,
  price4
}) {
  return (
    <section>
      <h2 className="text-center text-6xl mt-10 mb-10">{sectionName}</h2>
      <div className="h-[450px] mx-16 grid grid-cols-4 gap-4 auto-cols-max mb-24">
        <Product
          img={img1}
          name={name1}
          note={note1}
          price={price1}
        />
        <Product
          img={img2}
          name={name2}
          note={note2}
          price={price2}
        />
        <Product
          img={img3}
          name={name3}
          note={note3}
          price={price3}
        />
        <Product
          img={img4}
          name={name4}
          note={note4}
          price={price4}
        />
      </div>
      <div className="flex items-center justify-center ">
        <button className="py-4 px-14 my-10 rounded-full border-2 border-black">
          View All
        </button>
      </div>
    </section>
  );
}
