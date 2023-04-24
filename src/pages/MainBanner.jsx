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
        <p className="main_logoP">취향대로 골라담는 나만의 대전 명소</p>
      </div>
      <div className="circle">
        <div className="circle_left">
          <img
            src={`${process.env.PUBLIC_URL}/image/Ellipse 52.png`}
            alt="circle"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/Ellipse 53.png`}
            alt="circle"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/Ellipse 54.png`}
            alt="circle"
          />
        </div>
        <div className="circle_right">
          <img
            src={`${process.env.PUBLIC_URL}/image/Ellipse 55.png`}
            alt="circle"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/Ellipse 56.png`}
            alt="circle"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/Ellipse 57.png`}
            alt="circle"
          />
        </div>
      </div>
      <div className="choice">
        <div className="choice_left">
          <SelfSvg />
        </div>
        <div className="choice_right">
          <WhatSvg />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
