import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './aboutus.scss'
import CButton from '../CButton/CButton'

const AboutUs = () => {

    const navigate = useNavigate()
  return (
    <div className="about_container">
  <header>
    <nav className="navv">
      <ul className="nav__list">
        <li>
          <Link  className="nav__link" to='/'>← Home</Link>
        </li>
        <li>
          <Link to="/signup" className="nav__link">← create an account</Link>
        </li>
      </ul>
    </nav>
    <h1 className="page-title">About Us</h1>
  </header>
  <main>
    <article className="content">
      <section className="content__descriptor">
      </section>
      <section className="content__text-box">
        <p className="content__text">
          
<span style={{color: "#ffd700", fontWeight: "600"}}>WHO WE ARE</span> <br/> <br/>
Built on integrity and transparency, Ardor Finances is a stocks and blockchain mining platform focused on helping our clients reach thier financial climax.
We provide you with top-rated investment opportunity in stocks and blockchain mining that is made possible by our highly skilled analysts and traders. We are confident in our ability to deliver as we have promised. There are no risks involved as we properly and meticulously analyze our investments and ensure that they yield profit, which for our customers, means no risks. We keep a secure, safe and stable growth environment that is implemented to guard against losses and provide a soothing and easy-going environment for our customers.
        </p>
        <p className="content__text">
        At Ardor Finances, We provide an all-round, easy to use, risk-free platform that increases your earning exponentialy. Join the platform to discover the power of earning in the fastest growing financial ecosystem.
        <br/><br/><CButton text="Start Now" handleClick={() => navigate("/signup")}/></p>
      </section>
      
    </article>
  </main>
</div>

  )
}

export default AboutUs