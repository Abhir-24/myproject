import axios from "axios"
import { useState } from "react"


const Contact = () => {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async() => {
    console.log("handlesubmit called")
    await axios.post("http://localhost:3001/messages", {name, email, message})
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className="contact">
        <div className="con-form">
        <h1 className='contact-head'>Contact Us</h1> <br /> 
          <label className="con-label">Enter Your Name</label>
          <input type="text" className="name" placeholder="Enter Name" onChange={e => setName(e.target.value)} /> <br />
          <label className="con-label">Enter Your Email</label>
          <input type="text" className="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} /> <br />
          <label className="con-label">Enter Your Message</label>
          <textarea name="Message" id="" className="message" placeholder="Enter Message" onChange={e => setMessage(e.target.value)}/>
          <button className="contact-btn" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Contact