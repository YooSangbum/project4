import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SubHeader({ subName }) {
  let bar = subName === '/' ? '' : 'bar';

  useEffect(() => {
    let linkName = document.querySelectorAll('.SubHeader > nav > a');
    linkName.forEach((item) => {
      item.classList.remove('on');
      if (item.getAttribute('href').includes(subName)) {
        item.classList.add('on');
      }
    });
  }, [subName]);
  return (
    <section className="SubHeader mw">
      <nav className={`${bar}`}>
        <Link to="/self">직접 담기</Link>
        <Link to="/MainList">추천</Link>
      </nav>
    </section>
  );
}

export default SubHeader;
