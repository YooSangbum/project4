import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="wrap">
      <footer className="ft mw">
        <div className="ftLogo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="logo" />
          </Link>
        </div>
        <div className="ftCon">footer입니다</div>
      </footer>
    </div>
  );
}

export default Footer;
