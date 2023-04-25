import { Link } from 'react-router-dom';

function PlaceCard({ item }) {
  return (
    <Link to="/">
      <div className="place">{item.title}</div>
    </Link>
  );
}

export default PlaceCard;
