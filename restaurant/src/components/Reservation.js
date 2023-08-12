import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Reservation.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from "react-toastify";

export default function Reservation() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [Hour, setHour] = useState("18H");
  const [date, setDate] = useState(new Date());
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const navigate =useNavigate();


const handlesubmit = (e) => {
      e.preventDefault();
      let regobj={fName,lName, email, tel, people, Hour, date, occasion, preferences, comments};
      /*console.log(regobj);*/


     fetch("http://localhost:8000/Reservations",{
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Reservation Done.')
                navigate('/Confirmation');
            }).catch((err)=>{toast.success('Failed')})
          console.log('ok')

      }
  return (
   

    
    <form className="reservation-form" onSubmit={handlesubmit}>
      <h1 className="h1-reservation">Book a table and enjoy!!!</h1>
        <div className="container">
      <section className="info-part">
      <div>
        <label htmlFor="fName">First Name<span className="err-msg">*</span></label> <br></br>
        <input
          type="text"
          
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="lName">Last Name<span className="err-msg">*</span></label> <br></br>
        <input
          type="text"
          
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Email<span className="err-msg">*</span></label> <br></br>
        <input
          type="email"
         
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number<span className="err-msg">*</span></label> <br></br>
        <input
          type="tel"
       
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="Hour">Hour<span className="err-msg">*</span></label> <br></br>
        <select
        
          value={Hour}
          onChange={(e) => setHour(e.target.value)}
        >
          <option>18H</option>
          <option>18H30</option>
          <option>19H</option>
          <option>19H30</option>
          <option>20H</option>
          <option>20H30</option>
          <option>21H</option>
          <option>21H30</option>
          <option>22H</option>
        </select>
      </div>
      <div>
      <label htmlFor="Date">Date<span className="err-msg">*</span></label> <br></br>
      <DatePicker
      ClassName="datePicker" 
      dateFormat="dd/MM/yyyy"
      selected={date}
      onChange={(date) => setDate(date)}
      isClearable
      placeholderText="I have been cleared!"
    />
      </div>
      </section>
    <section className="reservation-part">
      <div>
        <label htmlFor="people">Number of People<span className="err-msg">*</span></label> <br></br>
        <input
          type="number"
       
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="occasion">Occasion<span className="err-msg">*</span></label> <br></br>
        <select
      
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences<span className="err-msg">*</span></label> <br></br>
        <select
          
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
        
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      </section>
      </div>
      <div>
        <br></br>
       
        <button type="submit" className="action-button">
          Book a Table
        </button>
      </div>
    </form>
  );

}