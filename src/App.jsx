import React, { Fragment } from "react";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Blogs from "./pages/blog/Blogs";
import Single from "./pages/single/Single";
import Notfound from "./pages/notfound/Notfound";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
