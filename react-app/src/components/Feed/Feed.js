import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';


import './feed.css';
import chest from '../../images/chest.jpeg';
import back from '../../images/back.jpeg';
import shoulders from '../../images/shoulders.jpeg';
import legs from '../../images/legs.jpeg';
import arms from '../../images/arms.jpeg';
import core from '../../images/core.jpeg';

import Navbar from '../NavBar';
import Footer from '../../components/Footer/Footer';




function Feed() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const user = useSelector(state => state.session.user);
    const workoutPlans = useSelector(state => state.user);

    useEffect(() => {
    }, [dispatch, sessionUser.id])





  return (
    <>

            <h1 className="feed-header">Select a body part and start working out.</h1>
    <div className="container">

            <div className="row-container row row-cols-1 row-cols-md-3 g-4">

            <div className="col">
                    <Link to="/core">
                    <div className="card h-100 text-white bg-dark mb-3 border-danger mb-3">
                    <img src={core} className="card-img-top" alt="core" id="core-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Core</h5>
                        <p className="card-text">The abdominal muscles are located between the ribs and the pelvis on the front of the body. The abdominal muscles support the trunk, allow movement and hold organs in place by regulating internal abdominal pressure.
                        Think of your core as a strong column that links the upper body and lower body together. Having a solid core creates a foundation for all activities. All our movements are powered by the torso – the abdominals and back work together to support the spine when we sit, stand, bend over, pick things up, exercise and more.
                        Your core muscles are the muscles deep within the abdominals and back, attaching to the spine or pelvis. Some of these muscles include the transversus abdominis, the muscles of the pelvic floor, and the oblique muscles
                        </p>
                    </div>
                    </div>
                    </Link>
                </div>

                <div className="col">
                    <Link to="/chest">
                    <div className="card h-100 text-white bg-dark mb-3 border-danger mb-3">
                    <img src={chest} className="card-img-top" alt="chest"/>
                    <div className="card-body">
                        <h5 className="card-title">Chest</h5>
                        <p className="card-text">
                        The chest is part of a larger group of “pushing muscles” found in the upper body. The chest, as part of this group, enables you to perform pushing actions such as the barbell bench press or a daily activity such as moving a heavy dresser.
                        To fully develop your chest, you need to hit it with heavy weight using a couple smartly chosen exercises.
                        Pectoralis muscle, any of the muscles that connect the front walls of the chest with the bones of the upper arm and shoulder. There are two such muscles on each side of the sternum (breastbone) in the human body: Pectoralis Major and Pectoralis Minor.
                        </p>
                    </div>
                    </div>
                    </Link>
                </div>


                <div className="col">
                    <Link to="/back">
                    <div className="card h-100 text-white bg-dark mb-3 border-danger mb-3">
                    <img src={back} className="card-img-top" alt="back"/>
                    <div className="card-body">
                        <h5 className="card-title">Back</h5>
                        <p className="card-text">Your back muscles are the main structural support for your trunk (torso). These muscles help you move your body, including your head, neck, shoulders, arms and legs. Your back muscles work together to allow you to bend over, twist, turn your head and extend your back.
                            These muscles also help you sit and stand up straight. They play an essential role in supporting your spine and helping you breathe.
                            Latissimus dorsi (lats), which helps you extend and rotate your shoulder and arm.
                            Levator scapulae, which raises your scapula (shoulder blade).
                            Rhomboids, two muscles (the rhomboid major and minor) that work together to pull the scapula inward toward the spine.
                            Trapezius (traps), which helps you move your body, raise your arms and have good posture.
                        </p>
                    </div>
                    </div>
                    </Link>
                </div>

                <div className="col">
                    <Link to="/legs">
                    <div className="card h-100 text-white bg-dark mb-3 border-danger mb-5">
                    <img src={legs} className="card-img-top" alt="legs"/>
                    <div className="card-body">
                        <h5 className="card-title">Legs</h5>
                        <p className="card-text">Your leg muscles help you move, carry the weight of your body and support you when you stand. You have several muscles in your upper and lower legs. They work together to enable you to walk, run, jump, flex, and point your feet.</p>
                    </div>
                    </div>
                    </Link>
                </div>

                <div className="col">
                    <Link to="/arms">
                    <div className="card h-100 text-white bg-dark mb-3 border-danger mb-5">
                    <img src={arms} className="card-img-top" alt="arms"/>
                    <div className="card-body">
                        <h5 className="card-title">Arms</h5>
                        <p className="card-text">You have more than twenty muscles in your upper arm and your forearm (the area between your elbow and your wrist). Your arm muscles help you with small, precise (fine motor) movements, such as wiggling your fingers or fastening a button. They also allow you to do big movements, like straightening your elbow, raising your arms above your head or doing push-ups.
                        Some muscles sit deep inside of your arm. Others are close to the surface of your skin, and you can easily see their outline when you contract (flex) your muscle. Tendons (soft tissues) attach your muscles to bones in your arm and shoulder.
                        Arm muscle strains (tearing or stretching a muscle too far) are common injuries. They often result from overuse or by lifting an object that’s too heavy. To avoid an arm muscle injury, warm up before exercising and stop if you feel pain.
                        </p>
                    </div>
                    </div>
                    </Link>
                </div>

                <div className="col">
                    <Link to="/shoulders">
                    <div className="card h-100 text-white bg-dark mb-3 border-danger mb-5" >
                    <img src={shoulders} className="card-img-top" alt="shoulders"/>
                    <div className="card-body">
                        <h5 className="card-title">Shoulders</h5>
                        <p className="card-text">Your shoulder is a ball-and-socket joint that allows you to perform a wide range of movements. You use these muscles for actions from throwing a ball to reaching an item on a shelf. Also called the glenohumeral joint, it has more range of motion than any other joint in your body. There are about eight muscles in your shoulder that support this joint. They give it strength, stability and shape.</p>
                    </div>
                    </div>
                    </Link>
                </div>

            </div>

        </div>
        <Footer />
    </>
  )
}

export default Feed
