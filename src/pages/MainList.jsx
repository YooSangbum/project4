import CartList from './CartList';
import BestPlace from './BestPlace';
import { useState } from 'react';

import BestCartListData from './BestCartListData';
import PlaceListData from './PlaceListData';

function MainList() {
  let [data] = useState(BestCartListData);
  let CartListData = data.slice(0, 4);

  let [place] = useState(PlaceListData);
  return (
    <section className="MainList">
      <CartList data={CartListData} />
      <BestPlace data={place} />
    </section>
  );
}

export default MainList;
