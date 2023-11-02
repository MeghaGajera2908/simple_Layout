import './App.css';
import { useNavigate } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrCentos } from "react-icons/gr";
import { MdEventSeat } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { BiChair } from "react-icons/bi";
import { GoCodeOfConduct } from "react-icons/go";

function Apps() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="page-2">
        <h2>Sayaji Rajkot</h2>
        <address>Vrindavan Society Main Road, Near Pradhyuman Green City Tower, Kalavad Road, Nana Mava, Rajkot, Gujarat - 360005</address>
        <div className="icon-2">
          <span><BsFillTelephoneFill color='white' /></span>
          <a href="028142222">028142222</a>
          <span><MdEmail color='white' /></span>
          <a href="sayjirajkot@gmail.com">sayjirajkot@gmail.com</a>
        </div>
      </div>
      <div className="center-page">
        <h1>Welcome to Sayaji Rajkot</h1>
        <p>TIn a city famed for gold jewellery and silk, it would only make sense for you to stay in a 5-star business hotel that delivers the same value in terms of luxury, amenities, food, and stay. Sayaji Rajkot is the luxurious go-to destination for all the elite residents and guests of the city who wish to experience a stay par excellence.</p>
        <p className='p-1'>At Sayaji Rajkot, you are welcomed by the world-class decor, grand banquet halls, plush rooms, a decadent dining experience, and a hospitable hotel staff. Here, your every whim is fulfilled and your every need is catered to. Experience the next level of hospitality only at Sayaji Rajkot. Enquire and book your stay today!</p>
        <div className='desine-1'>
          <div>
            <span className="icon-3"><GrCentos color='white' /></span>
            <h4>Flawless<br></br>
              Designs</h4>
          </div>
          <div>
            <span className="icon-3"><MdEventSeat color='white' /></span>
            <h4>Comfortable<br></br>
              Stay</h4>
          </div>
          <div>
            <span className="icon-3"><MdDinnerDining color='white' /></span>
            <h4>Fine-Dining<br></br>
              Restaurants</h4>
          </div>
          <div>
            <span className="icon-3"><BiChair color='white' /></span>
            <h4>Luxurious<br></br>
              Banquet Hall</h4>
          </div>
          <div>
            <span className="icon-3"><GoCodeOfConduct color='white' /></span>
            <h4>24-Hours<br></br>
              Front Desk</h4>
          </div>
        </div>
        <button className="but-2" onClick={() => navigate("/contact")}>VIEW ALL AMENITIES</button>
      </div>
    </div>
  );
}

export default Apps;
