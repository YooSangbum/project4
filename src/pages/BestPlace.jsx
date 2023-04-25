import HotList from './HotList';
import PickList from './PickList';
import BestPlaceSvg from '../svg/BestPlaceSvg';
import BookMarkList from './BookMarkList';

function BestPlace({ data }) {
  return (
    <section className="BestPlace mw">
      <BestPlaceSvg />
      <HotList data={data} />
      <div className="BestPlace_ListCon ">
        <PickList data={data} />
        <BookMarkList data={data} />
      </div>
    </section>
  );
}

export default BestPlace;
