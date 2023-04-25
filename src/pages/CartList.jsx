import { Link } from 'react-router-dom';
import CartCard from './CartCard';

function CartList({ data }) {
  return (
    <section className="CartList mw">
      <p className="CartList_name">
        <span>장바구니</span> 엿보기
        <img src={`${process.env.PUBLIC_URL}/image/eyes.png`} alt="eyes" />
      </p>
      <ul className="CartList_ul">
        {data.map((item, i) => {
          return (
            <li className="CartList_li" key={i}>
              <CartCard item={item} i={i} />
            </li>
          );
        })}
        <div className="LinkCon">
          <Link to="/" className="CartList_more">
            더보기{' '}
          </Link>
        </div>
      </ul>
    </section>
  );
}

export default CartList;
