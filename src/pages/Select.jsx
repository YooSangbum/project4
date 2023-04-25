function Select() {
  function handleClick() {
    const label = document.querySelector('.label');
    const options = document.querySelectorAll('.optionItem');
    const handleSelect = function (item) {
      label.innerHTML = item.textContent;
      label.parentNode.classList.remove('active');
    };
    options.forEach(function (option) {
      option.addEventListener('click', function () {
        handleSelect(option);
      });
    });

    label.addEventListener('click', function () {
      if (label.parentNode.classList.contains('active')) {
        label.parentNode.classList.remove('active');
      } else {
        label.parentNode.classList.add('active');
      }
    });
  }
  return (
    <section className="Select mw">
      <div className="selectCon">
        <div class="selectBox2 ">
          <button class="label" onClick={handleClick}>
            fruits 🍊
          </button>
          <ul class="optionList">
            <li class="optionItem">apple</li>
            <li class="optionItem">orange</li>
            <li class="optionItem">grape</li>
            <li class="optionItem">melon</li>
          </ul>
        </div>
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
