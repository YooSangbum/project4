function SelfHotCard({ item }) {
  return (
    <div className="SelfHotList_ImgCon">
      <img
        src={`${process.env.PUBLIC_URL}/image/${item.img}`}
        alt={item.title}
      />
      <p className="SelfHotList_name">{item.title}</p>
      <p className="SelfHotList_like">
        <img src={`${process.env.PUBLIC_URL}/image/heart.png`} alt="heart" />
        {item.like}
      </p>
    </div>
  );
}

export default SelfHotCard;
