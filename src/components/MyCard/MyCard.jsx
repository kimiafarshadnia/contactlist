import "./MyCard.css";
import me from "../../assets/images/me.jpeg";
const MyCard = () => {
  return (
    <div className="MyCard">
      <div className="MyImgCard">
        <img src={me} alt="my-card-img" />
      </div>
      <div>
        <h3>Kimia Farshadnia</h3>
        <span>My Card</span>
      </div>
    </div>
  );
};

export default MyCard;
