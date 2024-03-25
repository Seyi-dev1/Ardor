import styles from "./footer.module.scss";
import LOGO from "../../Images/logobig.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Footer = () => {
  const [customerSevice, setcustomerService] = useState(false);
  const [help, setHelp] = useState(false);
  const [terms, setTerms] = useState(false);

  return (
    <div className={styles.footer}>
      <div className={styles.tables}>
        <div className={styles.table}>
          <div
            className={styles.header}
            onClick={() => {
              setcustomerService(!customerSevice);
            }}
          >
            <h5>Customer Service</h5>
            <IoIosArrowDown className={styles.icon} />
          </div>
          <div
            className={customerSevice ? `${styles.links}` : `${styles.hide}`}
          >
            <p>Send us a mail:</p>
            <a href="mailto:support@fervorfinance.com" className={styles.info}>
              support@fervorfinance.com
            </a>
          </div>
        </div>
        <div className={styles.table}></div>
        <div className={styles.table}>
          <div
            className={styles.header}
            onClick={() => {
              setTerms(!terms);
            }}
          >
            <h5>Account</h5>
            <IoIosArrowDown className={styles.icon} />
          </div>
          <div className={terms ? `${styles.links}` : `${styles.hide}`}>
            <Link className={styles.link} to="/login">
              Login
            </Link>
            <Link className={styles.link} to="/signup">
              Create an Account
            </Link>
          </div>
        </div>
        <div className={styles.table}>
          <div
            className={styles.header}
            onClick={() => {
              setHelp(!help);
            }}
          >
            <h5>Knowloedge base</h5>
            <IoIosArrowDown className={styles.icon} />
          </div>
          <div className={help ? `${styles.links}` : `${styles.hide}`}>
            <Link className={styles.link} to="/about">
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.logo}>
          <Link to={"/"} className={styles.logoLink}>
            <img src={LOGO} alt="logo" className={styles.logomain} />
          </Link>
        </div>
        <div className={styles.text}>
          <p>©️2024 Fervor Finance Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
