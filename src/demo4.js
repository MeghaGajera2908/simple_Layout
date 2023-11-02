import { useState } from 'react';
import './App.css';

function Myreacts() {
  const [inputdata, setInputdata] = useState({ FirstName: "", LastName: "", Emailid: "", MobileNo: "" })
  const [record, setRecord] = useState([]);
  const handleonchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  console.log(record);
  const handlesubmit = () => {
    setRecord([...record, inputdata]);
    setInputdata({ FirstName: "", LastName: "", Emailid: "", MobileNo: "" });
  }
  return (
    <div className='body-1'>
      <div className='form'>
        <div>
          <label htmlFor='fnmae'>First Name:</label>
          <input type='text' id='fname' name='FirstName' size='40' value={inputdata.FirstName} onChange={(e) => handleonchange(e)} />
        </div>
        <div>
          <label htmlFor='lname'>Last Name:</label>
          <input type='text' id='lname' name='LastName' size='40' value={inputdata.LastName} onChange={(e) => handleonchange(e)} />
        </div>
        <div>
          <label htmlFor='email'>Email id:</label>
          <input type='email' id='email' name='Emailid' size='40' value={inputdata.Emailid} onChange={(e) => handleonchange(e)} />
        </div>
        <div>
          <label htmlFor='mo.no'>Mobile No:</label>
          <input type='tel' id='mo.no' name='MobileNo' size='40' value={inputdata.MobileNo} onChange={(e) => handleonchange(e)} />
        </div>
        <button type='submit' className='subimission' onClick={() => handlesubmit()}>SUBMIT</button>
        <p className='submission'><b>Thank you for Booking</b></p>
      </div>
    </div>

  );
}
export default Myreacts;
