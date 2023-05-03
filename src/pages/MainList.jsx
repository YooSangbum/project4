import CartList from './CartList';
import BestPlace from './BestPlace';
import { useState } from 'react';

import BestCartListData from './BestCartListData';
import PlaceListData from './PlaceListData';
import SubHeader from './SubHeader';

function MainList({ subName }) {
  let [data] = useState(BestCartListData);
  let CartListData = data.slice(0, 4);

  let [place] = useState(PlaceListData);
  return (
    <section className="MainList mw">
      <SubHeader subName={subName} />
      <CartList data={CartListData} />
      <BestPlace data={place} />
    </section>
  );
}

export default MainList;
