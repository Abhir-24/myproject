import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Start = () => {
  return (
    <div className='Start'>
        <Navbar />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
    </div>
  )
}

export default Start