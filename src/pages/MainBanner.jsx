import { Link } from 'react-router-dom';

import SelfSvg from '../svg/SelfSvg';
import WhatSvg from '../svg/WhatSvg';

function MainBanner() {
  return (
    <section className="MainBanner mw">
      <div className="main_logo">
        <div className="maps">
          <img src={`${process.env.PUBLIC_URL}/image/maps.png`} alt="maps" />
        </div>
        <div className="mart">
          <img src={`${process.env.PUBLIC_URL}/image/mart.png`} alt="mart" />
        </div>
        <p className="main_logoP">in 대전</p>
      </div>
      <div className="cartGif">
        <img src={`${process.env.PUBLIC_URL}/image/cart.gif`} alt="cart" />
      </div>
      <div className="choice">
        <div className="choice_left">
          <Link to="/">
            <SelfSvg />
          </Link>
        </div>
        <div className="choice_right">
          <Link to="mainList">
            <WhatSvg />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
