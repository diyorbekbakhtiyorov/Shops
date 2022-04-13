import React from "react";
import "./VertikalNavBar.css";

function VertikalNavBar() {
  return (
    <div>
      <div className="Vertikal">
        <div className="Nav_title">
          <p>CLOTHES</p>
        </div>
        <div className="Nav_stitle">
          <p>CATEGORY</p>
          <hr />
        </div>
        <div className="filter_category">
          <ol>
            <li>All</li>
            <li>Dresses</li>
            <li>Jeans</li>
            <li>Jumpsuits</li>
            <li>Tops</li>
            <li>Jackets and coats</li>
            <li>Pants</li>
            <li>Shorts</li>
            <li>Skirts</li>
            <li>Loungerie & underwear</li>
            <li>Leather</li>
            <li>Sweaters & knits</li>
          </ol>
        </div>
        <div className="Clothes_Size">
          <div className="Clothes_Size_title">
            <p>Size</p>
            <div className="Clear">
              <p>Clear ⨯</p>
            </div>
          </div>
          <hr />
          <div className="Sizee">
            <div>XXS</div>
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
            <div>32</div>
          </div>
        </div>
        <div className="Clothes_color">
          <div className="Clothes_color_title">
            <p>Color</p>
            <div className="Clear">
              <p>Clear ⨯</p>
            </div>
          </div>
          <hr />
          <div id="Color">
            <div className="d_f">
              <div></div>
              <p>Biege</p>
            </div>
            <div className="d_f1">
              <div></div>
              <p>Blue</p>
            </div>
            <div className="d_f2">
              <div></div>
              <p>Black</p>
            </div>
            <div className="d_f3">
              <div></div>
              <p>Orange</p>
            </div>
            <div className="d_f5">
              <div></div>
              <p>Green</p>
            </div>
            <div className="d_f6">
              <div></div>
              <p>Brown</p>
            </div>
            <div className="d_f7">
              <div></div>
              <p>Purple</p>
            </div>
            <div className="d_f8">
              <div></div>
              <p>Gold</p>
            </div>
            <div className="d_f9">
              <div></div>
              <p>Taupe</p>
            </div>
            <div className="d_f10">
              <div></div>
              <p>White</p>
            </div>
            <div className="d_f11">
              <div></div>
              <p>Pink</p>
            </div>
            <div className="d_f4">
              <div></div>
              <p>Red</p>
            </div>
          </div>
        </div>
        <div className="Clothes_Price">
          <div className="Price_title">
            <p>Price</p>
            <div className="Clear">
              <p>Clear ⨯</p>
            </div>
          </div>
          <hr />
          <div id="Price">
            <div className="cheack">
              <input type="checkbox" name="" id="" />
              <p>₦0 - ₦10,000</p>
            </div>
            <div className="cheack">
              <input type="checkbox" name="" id="" />
              <p>₦10,000 - ₦20,000</p>
            </div>
            <div className="cheack">
              <input type="checkbox" name="" id="" />
              <p>₦20,000 - ₦50,000</p>
            </div>
            <div className="cheack">
              <input type="checkbox" name="" id="" />
              <p>₦50,000 - ₦100,000</p>
            </div>
            <div className="cheack">
              <input type="checkbox" name="" id="" />
              <p>₦100,000 - ₦200,000</p>
            </div>
            <div className="input_price">
              <input type="text" name="" id="" placeholder="₦" />
              <p>to</p>
              <input type="text" name="" id="" placeholder="₦" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VertikalNavBar;
