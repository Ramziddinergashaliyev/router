import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import About from "../../components/about/About";
import Shop from "../../components/shop/Shop";
import Choose from "../../components/choose/Choose";

function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <Shop />
      <Choose />
    </div>
  );
}

export default Home;
