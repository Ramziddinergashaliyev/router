import React from "react";
import rasm1 from "../../assets/images/blog1.svg";
import rasm2 from "../../assets/images/blog2.svg";
import "./blog.scss";

function Blog() {
  return (
    <section className="blogs container">
      <h1 className="blogs__title"> Blog Posts</h1>
      <div className="blogs__cards">
        <div className="blogs__card">
          <div className="blogs__card__info">
            <h3 className="blogs__card__title">Tempered Glass</h3>
            <p className="blogs__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
          <div className="blogs__card__img">
            <img src={rasm1} alt="" />
          </div>
        </div>
        <div className="blogs__card">
          <div className="blogs__card__img">
            <img src={rasm2} alt="" />
          </div>
          <div className="blogs__card__info">
            <h3 className="blogs__card__title">Back Cover</h3>
            <p className="blogs__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>
        <div className="blogs__card">
          <div className="blogs__info">
            <h3 className="blogs__info__title">
              Mobile Brand and Price Strategy
            </h3>
            <p className="blogs__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
              Ornare massa eget egestas purus viverra accumsan in. Tristique
              senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
              sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
              mauris augue neque gravida in fermentum et. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
              consequat interdum varius sit amet mattis. Odio eu feugiat pretium
              nibh ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
