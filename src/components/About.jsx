import axios from "axios"
import { useState, useEffect } from "react"


const About = () => {
  const api = 'https://jsonplaceholder.typicode.com/users'
  const [users,setUsers] = useState([])

  useEffect(() => {
    axios.get(api).then(
      (res) => setUsers(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className='About'>
      <div className="about-frame">
        <h1 className='about-head'>Our Members</h1>
        <div className="grid-container">
          {
            users.map(user => {
              if(user.id <= 9)
              return (
                <>
                  <div className="card" key={user?.id}>
                    <ul className="details">
                      <li className="detail name"><h3>{user?.name}</h3></li><br />
                      <li className="detail"><span>Profile User Name:</span> <span>{user?.username}</span></li>
                      <li className="detail"><span>Email:</span> <span>{user?.email}</span></li>
                      <li className="detail"><span>City:</span> <span>{user?.address?.city}</span></li>
                      <li className="detail"><span>Phone Number:</span> <span>{user?.phone}</span></li>
                      <li className="detail"><span>Company:</span> <span>{user?.company?.name}</span></li>
                      <li className="detail"><span>Website:</span> <span>{user?.website}</span></li>
                    </ul>
                  </div>
                </>
              )})
          }
        

        {/* <div className="card">
          <ul className="details">
            <li className="detail name"><h3>Bran Ford</h3></li><br />
            <li className="detail"><span>Profile User Name:</span> <span>Bran044</span></li>
            <li className="detail"><span>Email:</span> <span>bran@gmail.com</span></li>
            <li className="detail"><span>City:</span> <span>California</span></li>
            <li className="detail"><span>Phone Number:</span> <span>7845124578</span></li>
            <li className="detail"><span>Company:</span> <span>Bressel</span></li>
            <li className="detail"><span>Website:</span> <span>bren.org</span></li>
          </ul>
        </div> */}
          
        </div>
      </div>
    </div>
  )
}

export default About