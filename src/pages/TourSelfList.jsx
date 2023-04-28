import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

function TourSelfList({ a }) {
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
  // ===============================================================================================
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  // ===============================================================================================

  return (
    <li
      className="selfList_li"
      onClick={() => {
        saveDataToLocalStorage(
          a.tourspotNm,
          a.tourspotAddr,
          a.refadNo,
          a.mapLat,
          a.mapLot,
          a.restrntSumm,
          a.tourspotDtlAddr
        );
      }}
    >
      <div className="selfList_list" ref={ref}>
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
        <p className="selfList_list_title">{a.tourspotNm}</p>
        <p className="selfList_list_Addr">{a.tourspotAddr}</p>
        <div className="btn_con">
          <Button onClick={handleClick}> 더보기 + </Button>
        </div>

        <Overlay
          show={show}
          target={target}
          placement="top"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">{a.tourspotNm}</Popover.Header>
            <Popover.Body>
              <div className="toolTips_con">
                <div className="toolTips_map">지도</div>
                <div className="toolTips_pcon">
                  <p className="toolTips_title">이름</p>
                  <p className="toolTips_addr">주소</p>
                  <p className="toolTips_dtlAddr">구주소</p>
                  <p className="toolTips_tel">전화번호</p>
                  <p className="toolTips_summ">설명</p>
                </div>
              </div>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </li>
  );
}

export default TourSelfList;
