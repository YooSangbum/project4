function Select() {
  return (
    <section className="Select mw">
      <div className="selectCon">
        <select name="" id="">
          <option value="">fff</option>
        </select>
        <select name="" id="">
          <option value="">fff</option>
        </select>
        <select name="" id="">
          <option value="">fff</option>
        </select>
      </div>
      <div className="SelectImgCon">
        <img
          src={`${process.env.PUBLIC_URL}/image/bag.png`}
          alt="장바구니담기"
        />
      </div>
    </section>
  );
}

export default Select;
