import { useState } from 'react';

function ShopSelfList({ a }) {
  // let [like, setLike] = useState(false);
  // ===============================================================================================

  const randomInt = Math.floor(Math.random() * 10000);
  // 0 이상 10 미만의 랜덤한 정수
  // ===============================================================================================
  let [storage, setStorage] = useState([]);
  const saveDataToLocalStorage = (
    title,
    addr,
    tel,
    mapLat,
    mapLot,
    summ,
    dtlAddr
  ) => {
    const data = { title, addr, tel, mapLat, mapLot, summ, dtlAddr };
    localStorage.setItem('selected', JSON.stringify(data));
    console.log(data);
    setStorage([data]);
  };

  return (
    <li
      className="selfList_li"
      onClick={() => {
        saveDataToLocalStorage(
          a.shppgNm,
          a.shppgAddr,
          a.shppgInqrTel,
          a.mapLat,
          a.mapLot,
          a.shppgIntrd,
          a.shppgDtlAddr
        );
      }}
    >
      <div className="selfList_list">
        <div
          className="selfList_imgCon"
          // onClick={() => {
          //   setLike(!like);
          // }}
        >
          <img src={`${process.env.PUBLIC_URL}/image/like.png`} alt="하트" />
          <p>{randomInt}</p>
          {/* {like === false ? (
            <img
              src={`${process.env.PUBLIC_URL}/image/like-none.png`}
              alt="빈하트"
            />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/image/like.png`} alt="하트" />
          )} */}
        </div>
        <p className="selfList_list_title">{a.shppgNm}</p>
        <p className="selfList_list_Addr">{a.shppgAddr}</p>
      </div>
    </li>
  );
}

export default ShopSelfList;
