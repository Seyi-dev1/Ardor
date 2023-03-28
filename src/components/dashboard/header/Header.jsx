import './Header.scss'
import Logo from '../../../images/logo_black.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_container'>
            <img src={Logo} alt='Logo' className='logo'/>
            <h3 className="text">Dashboard</h3>
        </div>
        <div className='links'>
            <a href="*" className="link">FAQs</a>
        </div>
    </div>
  )
}
export default Header
