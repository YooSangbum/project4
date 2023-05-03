import { useEffect } from 'react';
import { useState } from 'react';
// ==============================================================================

import Select from './Select';
import SelfHotList from './SelfHotList';
import locations from './LocationData';
import Tour from './Tour';
import Shop from './Shop';
import Food from './Food';
import Room from './Room';
import SubHeader from './SubHeader';
// ==============================================================================

function Self({ subName }) {
  let [locationList] = useState(locations);
  let [chooseGu, setChooseGu] = useState([]);
  let [recentItems, setRecentItems] = useState([]);
  let [data, setData] = useState([]);
  let [data2, setData2] = useState();
  const [selectedOption, setSelectedOption] = useState('1');
  const [dataT, setDataT] = useState([]);
  const [dataR, setDataR] = useState([]);
  const [dataF, setDataF] = useState([]);
  const [dataS, setDataS] = useState([]);

  // ==============================================================================
  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
    setRecentItems(JSON.parse(savedData));
  }, []);
  // ==============================================================================

  const handleSearchGu = (e) => {
    const inputText = e.target.value.trim();
    setChooseGu(locationList[inputText]);

    // '구'를 선택했을 때 나오는 데이터
    const filteredData =
      inputText === '구전체' || null
        ? [...recentItems]
        : recentItems.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === 'string' && val.includes(inputText)
            );
          });
    setData(filteredData);
    setData2(filteredData);
  };
  // ==============================================================================

  const handleSearchDong = (e) => {
    const inputText2 = e.target.value.trim();

    setData(
      inputText2 === '전체' || null
        ? [...data2]
        : data2.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === 'string' && val.includes(inputText2)
            );
          })
    );
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];
    data.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });
    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
  }, [data]);
  // ==============================================================================

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };
  let selectedComponent = null;
  if (selectedOption === '1') {
    selectedComponent = <Tour list={dataT} />;
  } else if (selectedOption === '2') {
    selectedComponent = <Food list={dataF} />;
  } else if (selectedOption === '3') {
    selectedComponent = <Shop list={dataS} />;
  } else if (selectedOption === '4') {
    selectedComponent = <Room list={dataR} />;
  }

  let [watched] = useState([]);

  return (
    <>
      <section className="Self mw">
        <SubHeader subName={subName} />
        <Select
          handleSearchGu={handleSearchGu}
          handleSearchDong={handleSearchDong}
          handleSelect={handleSelect}
          chooseGu={chooseGu}
        />
        <SelfHotList />
        <p className="SelfList_name">
          <span>골라</span>
          <span>담기</span>
          <img src={`${process.env.PUBLIC_URL}/image/pick.png`} alt="pick" />
        </p>
        {selectedComponent}
      </section>
    </>
  );
}

export default Self;
