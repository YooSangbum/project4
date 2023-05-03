import Cart from './Cart';

function Select({ handleSearchGu, handleSearchDong, handleSelect, chooseGu }) {
  return (
    <section className="Select ">
      <div className="selectCon">
        <select onChange={handleSearchGu} name="name1" id="">
          <option value="구전체">구전체</option>
          <option value="서구">서구</option>
          <option value="중구">중구</option>
          <option value="동구">동구</option>
          <option value="유성구">유성구</option>
          <option value="대덕구">대덕구</option>
        </select>
        <select onChange={handleSearchDong} name="name2" id="">
          <option value="전체">전체</option>
          {chooseGu.map((key, i) => (
            <option key={i} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select onChange={handleSelect} name="name3" id="">
          <option value="1">관광지</option>
          <option value="2">음식점</option>
          <option value="3">쇼핑몰</option>
          <option value="4">숙박업소</option>
        </select>
      </div>
      <Cart />
    </section>
  );
}

export default Select;
