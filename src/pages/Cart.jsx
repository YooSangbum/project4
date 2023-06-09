import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../store/cartStore';
import { Link } from 'react-router-dom';

function Cart() {
  let [img, setImg] = useState(false);
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <section className="Cart">
      {img ? null : (
        <div
          className="SelectImgCon"
          onClick={() => {
            setImg(!img);
          }}
        ></div>
      )}

      <div className={`cart_block ${img ? 'active' : ''}`}>
        <div className="close_con">
          <button
            className="close"
            onClick={() => {
              setImg(false);
            }}
          >
            <p></p>
          </button>
        </div>
        <p>담은 목록</p>

        {cart.map((a, i) => {
          return (
            <div className="cart_con" key={i}>
              <p className="choiced">{a.title}</p>
              <p
                className="del"
                onClick={(e) => {
                  return dispatch(
                    deleteItem(
                      e.target.parentNode.querySelector('.choiced').textContent
                    )
                  );
                }}
              ></p>
            </div>
          );
        })}

        <div className="cart_btns">
          <button>공유하기</button>
          <Link to="/cartdetail">저장하기</Link>
        </div>
      </div>
    </section>
  );
}
export default Cart;
