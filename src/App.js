import './App.css';
import { useNavigate } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa"

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="main-page">
        <div className="header">
          <img alt="hotel" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZq2vH07n-l6kLvXAr82NKBWoiuloK1IB1X93v2BotSA&s" />
          <h5 className="head-1">HOME</h5>
          <h5>CONTACT US</h5>
          <h5>ABOUT US</h5>
          <h5>PAGE</h5>
          <h5>SERVICES</h5>
          <span className="icon-1"><BsInstagram color='black' /></span>
          <span><FaWhatsapp color='black' /></span>
          <span><FaFacebookF color='black' /></span>
          <span><BsTwitter color='black' /></span>
          <span><FaLinkedinIn color='black' /></span>
          <button className="but" onClick={() => navigate("/vlog")}>Book Now</button>
        </div>
        <img className="img-1" alt="hotal" src="https://sayajihotels.com/images/innerBanner/sayaji-rajkot-overview/banner1.jpg" />
      </div>
      <button className="but-1" onClick={() => navigate("/head")}>Next Page</button>
    </div>
  );
}

export default App;
