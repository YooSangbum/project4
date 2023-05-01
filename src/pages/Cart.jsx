import { useState } from 'react';

function Cart() {
  let [img, setImg] = useState(false);
  return (
    <section className="Cart">
      <div
        className="SelectImgCon"
        onClick={() => {
          setImg(!img);
        }}
      >
        {img === false ? (
          <img
            src={`${process.env.PUBLIC_URL}/image/bag.png`}
            alt="장바구니담기"
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/image/bag_effect copy.png`}
            alt="장바구니담기"
          />
        )}
      </div>
      <div className={`cart_block ${img ? 'active' : ''}`}>
        <div className="close_con">
          <button
            className="close"
            onClick={() => {
              setImg(false);
            }}
          >
            닫기
          </button>
        </div>
        <p>담은 목록</p>
        <div className="cart_con">
          <p>장소1</p>
          <p></p>
        </div>
        <div className="cart_btns">
          <button>공유하기</button>
          <button>저장하기</button>
        </div>
      </div>
    </section>
  );
}
export default Cart;
