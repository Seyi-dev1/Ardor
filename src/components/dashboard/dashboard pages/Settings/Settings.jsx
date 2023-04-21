import React from 'react'
import './settings.scss'
import Switch from '../../../switch/Switch'
import {MdNotificationsActive, MdVpnKey} from 'react-icons/md'
import {BsFillShieldLockFill, BsPaletteFill} from  'react-icons/bs'




const Settings = () => {

  return (
    <div className="settings_page">
      <div className="settings_container">
      <h3 className="title">Settings</h3>
      <h3 className="subtitle">Security & Login</h3>
      <div className="security">
      <div className="security_action">
      <MdNotificationsActive className='icon'/>
      <h3 className="text">Get alerts about unrecognized logins</h3>
      <Switch className='toggle'/>
      </div>
      <div className="security_action">
      <BsFillShieldLockFill className='icon'/>
      <h3 className="text">Use two factor authentication (OTP)</h3>
      <Switch className='toggle'/>
      </div>
      <div className="security_action">
      <MdVpnKey className='icon'/>
      <h3 className="text">Change Password</h3>
      </div>

      </div>
       <h3 className="subtitle">Display</h3>
      <div className="display_container">
      <div className="display_action">
      <BsPaletteFill className='icon'/>
      <h3 className="text">Switch between light and dark mode</h3>
      <Switch className='toggle'/>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Settings