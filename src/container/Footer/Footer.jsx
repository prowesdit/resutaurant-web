import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">kaderTower, Golam Rasul, Chittagong</p>
        <p className="p__opensans">+880125645666</p>
        <p className="p__opensans">+880315234466</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon_img"
          style={{ marginTop: "1rem" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00am - 11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Right Reserved</p>
    </div>
  </div>
);

export default Footer;
