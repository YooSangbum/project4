import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Kakao from './Maps';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.storage.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="toolTips_con">
          <div className="toolTips_map">
            <Kakao item={props.storage} />
          </div>
          <div className="toolTips_pcon">
            <p className="toolTips_title">
              {props.storage.title ? props.storage.title : '데이터가 없습니다'}
            </p>
            <p className="toolTips_addr">
              <strong>주소 </strong>
              {props.storage.addr ? props.storage.addr : '데이터가 없습니다.'}
            </p>
            <p className="toolTips_dtlAddr">
              <strong>구주소 </strong>
              {props.storage.dtlAddr
                ? props.storage.dtlAddr
                : '데이터가 없습니다'}
            </p>
            <p className="toolTips_tel">
              <strong>전화번호 </strong>
              {props.storage.tel ? props.storage.tel : '데이터가 없습니다'}
            </p>
            <p className="toolTips_summ">
              <strong>설명</strong>
              <span>
                {props.storage.summ ? props.storage.summ : '데이터가 없습니다'}
              </span>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="toolTips_Pcon">
          <Button>담기</Button>
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function SelfHotCard({ item }) {
  const [modalShow, setModalShow] = useState(false);

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

  return (
    <div
      className="SelfHotList_ImgCon"
      onClick={() => {
        saveDataToLocalStorage(
          item.title,
          item.addr,
          item.tel,
          item.mapLat,
          item.mapLot,
          item.summ,
          item.dtlAddr
        );
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/image/${item.img}`}
        alt={item.title}
      />
      <p className="SelfHotList_name">{item.title}</p>
      <p className="SelfHotList_like">
        <img src={`${process.env.PUBLIC_URL}/image/heart.png`} alt="heart" />
        {item.like}
      </p>
      <Button
        className="SelfHotList_btn"
        variant="primary"
        onClick={() => {
          setModalShow(!modalShow);
          console.log('asd', modalShow);
        }}
      >
        더보기 +
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        storage={storage}
      />
    </div>
  );
}

export default SelfHotCard;
