import React from "react";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import BrandsBand from "./components/BrandsBand.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import BrowseCategory from "./components/BrowseCategory.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Section />
      <BrandsBand />
      <ProductsSection
        sectionName={"New Arrivals"}
        img1={"src/images/black_t-shirt.png"}
        img2={"src/images/jeans.png"}
        img3={"src/images/red_white-stripes_shirt.png"}
        img4={"src/images/orange_black_t-shirt.png"}
        name1={"T-shirt with Tape Details"}
        name2={"Skinny Fit Jeans"}
        name3={"Checkered Shirt"}
        name4={"Sleeve Striped T-shirt"}
        price1={"$120"}
        price2={"$260"}
        price3={"$180"}
        price4={"$160"}
        note1={"4.5"}
        note2={"3.5"}
        note3={"4.5"}
        note4={"4.5"}
      />
      <div className= "flex border-2 justify-center mx-20"></div>
      <ProductsSection
        sectionName={"Top Selling"}
        img1={"src/images/vertical_striped_green_shirt.png"}
        img2={"src/images/courage_shirt.png"}
        img3={"src/images/loose_fit_bermuda.png"}
        img4={"src/images/faded_skinny_jeans.png"}
        name1={"Vertical Striped Shirt"}
        name2={"Courage Graphic T-shirt"}
        name3={"Loose Fit Bermuda Shorts"}
        name4={"Faded Skinny Jeans"}
        price1={"$232"}
        price2={"$145"}
        price3={"$80"}
        price4={"$210"}
        note1={"5.0"}
        note2={"4.0"}
        note3={"3.0"}
        note4={"4.5"}
      />
      <BrowseCategory/>
    </>
  );
}

export default App;
