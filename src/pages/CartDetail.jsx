import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartDetail() {
  let cart = useSelector((state) => state.cart);
  return (
    <section className="CartDetail mw">
      <div className="CartDetail_name_con">
        <Link to="/self">뒤로가기</Link>
        <p className="CartDetail_name">My Place Cart</p>
      </div>
      {cart.map((a, i) => {
        return (
          <div className="CartDetail_con" key={i}>
            <div className="CartDetail_imgCon">
              {!a.img ? (
                <p>이미지를 준비 중입니다</p>
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/image/${a.img}`}
                  alt="이미지"
                />
              )}
            </div>
            <div className="CartDetail_Pcon">
              <p className="CartDetail_title">{a.title}</p>
              <p className="CartDetail_addr">
                <span>주소</span>
                {a.addr}
              </p>
              <p className="CartDetail_tel">
                <span>전화번호</span>
                {a.tel}
              </p>
              <p className="CartDetail_summ">
                <span>설명</span>
                {a.summ}
              </p>
            </div>
          </div>
        );
      })}
      <div className="CartDetail_btn">
        <Link to="/self">계속 쇼핑하러 가기</Link>
      </div>
    </section>
  );
}

export default CartDetail;
