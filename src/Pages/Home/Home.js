import React, { useState } from "react";
import "./Home.css";
import HomeImg1 from "../../Img/Images/homeImg1.png";
import HomeImg2 from "../../Img/Images/homeImg2.png";
import Img1 from "../../Img/Images/img1.png";
import Footer from "../../Footer";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

function Home() {
  const [data] = useState([
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
    {
      img: Img1,
      name: "Multicolored armless top",
      cost: "₦10,000",
    },
  ]);

  return (
    <div>
      {/* <NavBar /> */}
      <div className="home-img">
        <img src={HomeImg1} alt="" className="homeImg1" />
        <img src={HomeImg2} alt="" className="homeImg2" />
        <div className="four-points">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="#body">
          <div className="explore_our_collection">
            <p>Explore our collection</p>
            <span>▽</span>
          </div>
        </a>
      </div>
      <section id="body">
        <hr className="shop_your_style_hr" />
        <div className="shop_your">
          <p className="shop_your_style">Shop your style</p>
        </div>
        <div className="body_texts">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            gravida cursus adipiscing viverra at tortor, egestas odio
            parturient. Morbi ut lorem in erat. Et et molestie diam diam
            ultricies. Scelerisque duis diam ac cras dictum adipiscing.
            Venenatis at sit proin ut vitae adipiscing id facilisis.
          </p>
        </div>
        <div className="senter">
          <div className="shopping_cards">
            {data.map((post, i) => (
              <div className="card" key={i}>
                <div className="Hover_div">
                  <div className="Like_">
                    <AiOutlineHeart />
                  </div>
                  <div className="Add_to_card">
                    <button>
                      ADD TO CART <BsCartPlus />
                    </button>
                  </div>
                </div>
                <div className="card_img">
                  <img src={post.img} alt="Img_1" />
                </div>
                <div className="card_name">
                  <p>{post.name}</p>
                </div>
                <div className="card_cost">
                  <p>{post.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="#">
          <div className="tepaga">
            <p>△</p>
          </div>
        </a>
        <div className="Pagination">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>{">"}</p>
        </div>
      </section>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
