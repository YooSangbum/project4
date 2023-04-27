import { useState } from 'react';

function RoomSelfList({ a }) {
  let [like, setLike] = useState(false);
  return (
    <li className="selfList_li">
      <div className="selfList_list">
        <p className="selfList_list_title">{a.romsNm}</p>
        <div
          className="selfList_imgCon"
          onClick={() => {
            setLike(!like);
          }}
        >
          {like === false ? (
            <img
              src={`${process.env.PUBLIC_URL}/image/like-none.png`}
              alt="빈하트"
            />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/image/like.png`} alt="하트" />
          )}
        </div>
      </div>
    </li>
  );
}

export default RoomSelfList;
