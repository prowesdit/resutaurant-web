import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="abput_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          minima similique quasi expedita officia, molestiae vero. Architecto
          ratione omnis expedita? Quos laboriosam facilis officia praesentium
          unde ipsum et adipisci dolores!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_gSpoon flex__center">
        <img src={images.gSpoon} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="abput_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          minima similique quasi expedita officia, molestiae vero. Architecto
          ratione omnis expedita? Quos laboriosam facilis officia praesentium
          unde ipsum et adipisci dolores!
        </p>
        <button type="button" className="custom__button">
          {" "}
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
