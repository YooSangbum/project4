import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="wrap">
      <header className="hd mw">
        <Link className="logo">
          <img src={`${process.env.PUBLIC_URL}/image/logoS.png`} alt="logo" />
        </Link>
        <div className="person">
          <Link className="login" to="/">
            로그인
          </Link>
          <Link className="myPage" to="/">
            마이페이지
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
