import './splash.css';

// import AliceCarousel from 'react-alice-carousel'
// import "react-alice-carousel/lib/alice-carousel.css";

// import image1 from '../../images/image1.jpg'
// import image2 from '../../images/image2.jpg'
// import image3 from '../../images/image3.jpg'
// import image4 from '../../images/image4.jpg'
import Footer from '../Footer/Footer';
import LoginForm from '../auth/LoginForm';
import { Link } from 'react-router-dom';

function Splash() {



  return (
    <>
        <div className="splash-container-left">
            <div className="splash left">
            {/* <AliceCarousel autoPlay autoPlayInterval="3000">
            <p><img src={image1} className="sliderimg" alt="background" /></p>
            <p><img src={image2} className="sliderimg" alt="background" /></p>
            <p><img src={image3} className="sliderimg" alt="background" /></p>
            <p><img src={image4} className="sliderimg" alt="background" /></p>
        </AliceCarousel > */}
                <div className="centered">
                <h1 className="header"> Lets Get After It</h1>
                <span>
                    <span> Fitness </span>
                    <span> Made    </span>
                    <span> Simple  </span>
                </span>
                <p className="bio">Our goal is to make working out easy for the everyday person. Our database is filled with workouts, which you can filter by body part to make building a workout plan as convenient as possible.</p>
                </div>
            </div>
            <div className="splash-container-right ">
            <div className="splash right">
            <div className="centered">
                <LoginForm />
                </div>
            </div>
        </div>

        </div>
        <Footer />
    </>
  )
}

export default Splash
