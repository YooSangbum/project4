import { useState, useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartStore';

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

import Kakao from './Maps';

function FoodSelfList({ a, i }) {
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
    setStorage(data);
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
  // 외부 클릭시 모달 닫힘
  // const overlayRef = useRef(null);
  // const handleClickOutside = (event) => {
  //   if (overlayRef.current && !overlayRef.current.contains(event.target)) {
  //     setShow(!show);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, [show]);

  let dispatch = useDispatch();

  return (
    <li
      className="selfList_li"
      onClick={() => {
        saveDataToLocalStorage(
          a.restrntNm,
          a.restrntAddr,
          a.restrntInqrTel,
          a.mapLat,
          a.mapLot,
          a.restrntSumm,
          a.restrntDtlAddr
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
        <p className="selfList_list_title">{a.restrntNm}</p>
        <p className="selfList_list_Addr">{a.restrntAddr}</p>
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
            <Popover.Header as="h3">
              {a.restrntNm}
              <button className="xbtn" onClick={handleClick}>
                X
              </button>
            </Popover.Header>
            <Popover.Body>
              <div className="toolTips_con">
                <div className="toolTips_map">
                  <Kakao item={storage} />
                </div>
                <div className="toolTips_pcon">
                  <p className="toolTips_title">
                    {storage.title ? storage.title : '데이터가 없습니다'}
                  </p>
                  <p className="toolTips_addr">
                    <strong>주소 </strong>
                    {storage.addr ? storage.addr : '데이터가 없습니다.'}
                  </p>
                  <p className="toolTips_dtlAddr">
                    <strong>구주소 </strong>
                    {storage.dtlAddr ? storage.dtlAddr : '데이터가 없습니다'}
                  </p>
                  <p className="toolTips_tel">
                    <strong>전화번호 </strong>
                    {storage.tel ? storage.tel : '데이터가 없습니다'}
                  </p>
                  <p className="toolTips_summ">
                    <strong>설명</strong>
                    <span>
                      {storage.summ ? storage.summ : '데이터가 없습니다'}
                    </span>
                  </p>
                </div>
                <div className="toolTips_Pcon">
                  <button
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: i,
                          title: a.restrntNm,
                          addr: a.restrntAddr,
                          tel: a.restrntInqrTel,
                          mapLat: 'a.mapLat',
                          mapLot: 'a.mapLot',
                          summ: a.restrntSumm,
                          dtlAddr: a.restrntDtlAddr,
                        })
                      );
                    }}
                  >
                    담기
                  </button>
                </div>
              </div>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </li>
  );
}

export default FoodSelfList;
