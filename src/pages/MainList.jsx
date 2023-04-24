import CartList from './CartList';
import HotList from './HotList';
import BestList from './BestList';

function MainList() {
  return (
    <section>
      <CartList />
      <HotList />
      <BestList />
    </section>
  );
}

export default MainList;
