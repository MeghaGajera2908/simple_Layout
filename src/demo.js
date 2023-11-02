import './App.css';
import { useNavigate } from 'react-router-dom';

function Myfunction() {
  const navagite = useNavigate();
  return (
    <div>
      <div>
        <img className='aminities' alt='aminities' src="https://sayajihotels.com/images/innerBanner/sayaji-rajkot-overview/banner2.jpg" />
      </div>
      <div>
        <h2 className='aminities-1'>Hotel Amenities</h2>
      </div>
      <div className='list-1'>
        <div>
          <ul>
            <li>Transfers and Pick-up Services (Chargeable)</li>
            <li>Sunbed - Poo</li>
            <li>Gym</li>
            <li>Backup Generator</li>
            <li>Concierge</li>
            <li>Multilingual Staff</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>24 Hours Front Desk</li>
            <li>Spa (Samayaa)</li>
            <li>Valet Parking</li>
            <li>Ballroom</li>
            <li>Doctor on Call</li>
            <li>Wheelchair</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Swimming Pool</li>
            <li>Garden</li>
            <li>Credit Cards Accepted (Visa, Master, Rupay)</li>
            <li>Car Rental</li>
            <li>Business Centre</li>
            <li>FM Radio & Charger</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Offers</h1>
      </div>
      <div>
        <div>
          <button className="but-3">Rooms</button>
        </div>
        <div>
          <button className="but-3" onClick={() => navagite("/header")}>Dinning</button>
        </div>
        <div>
          <button className="but-3" onClick={() => navagite("/vlogs")}>Banquet</button>
        </div>
      </div>
      <div>
        <img className="room" alt="room" src="https://sayajihotels.com/images/hotels/sayaji-rajkot/overview/rooms.jpg" />
      </div>
      <div>
        <h1>Gallary</h1>
      </div>
      <div>
        <img className='gallary' alt='room' src='https://sayajihotels.com/images/hotels/sayaji-rajkot/gallery/img1.jpg' />
        <img className='gallary' alt='room' src='https://sayajihotels.com/images/hotels/sayaji-rajkot/gallery/img2.jpg' />
        <img className='gallary' alt='room' src='https://sayajihotels.com/images/hotels/sayaji-rajkot/gallery/img3.jpg' />
      </div>
      <div>
        <h1>Location</h1>
        <img className='location' alt='location' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-PyJPQ89ipLpkhmdWZguG20PVtHdCKz3pFRLrCDa&s' />
      </div>
      <div className='last'>
        <p className='last-par'>"Had excellent experiences staying sayaji- we stayed for 17 nights and staff and services was impeccable special - thanks to bandana in resturant and naina fron desks. thanks to all members"</p>
        <h2>Ms. Megha Gajeera</h2>
      </div>
    </div>
  );
}

export default Myfunction;
