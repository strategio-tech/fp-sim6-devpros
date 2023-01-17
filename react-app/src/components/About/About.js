import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer/Footer"
import Me from '../public/me.png';

import './about.css'

function About() {
  return (
    <>
    <NavBar />
    <div className="about">
        <div className="split-left">

          <div className="typewriter">
            <h1>Hi, I'm Andrew Fava a Full-Stack Developer</h1>
          </div>

            <div className="about-img">
              <img src={Me} alt="me" />
            </div>

        <div className="about-me">
          <p>
          I’m a passionate software developer with the innovative and creative mindset of an entrepreneur. I have experience building dynamic web applications with React, Javascript, Express, Python, Redux, Flask, Docker, PostgreSQL, SQLAlchemy, and CSS.
          I love the battle of developing an idea into existence and forging the bridge between conceptualization and a tangible, impactful product.
          Programming has been my outlet for problem-solving and creative expression.
          </p>
        </div>

        <div className="about-me">
          <p>
          Apart from coding, I enjoy playing golf, boxing, spending time with my dog and my family.
          My background in Business and Account Management has given me a unique perspective on the importance of a strong brand and the value of a great user experience.
          I'm able to combine my passion for programming with my business background to create a product that is both functional and beautiful.
          </p>
        </div>

        <div className="about-text">
          <p>
          My inspiration behind creating this app was to motivate people to get out and exercise. I wanted to create a platform that would allow people to create their own workout plans.
          I understand how overwhelming and intididating it can be to start working out, which is why I aggregated hundreds of workouts orgranized by muscle groups so you can go and Get After It.
          Using this app is as simple as creating a workout plan, choosing a muscle group, and adding workouts you want to a plan of your choice. You can follow along with the gifs to make sure you're doing the exercises correctly.
          </p>
        </div>

      <div className="social-links">
        <p>
          <h3>You can reach me at:</h3>
          <div>LinkedIn: <a href="https://www.linkedin.com/in/andrewfava/">LinkedIn</a></div>
          <div>GitHub: <a href="https://github.com/Andrewcodes12">GitHub</a></div>
          <div>Email: AndrewFava@yahoo.com</div>
          <div>Portfolio: <a href="https://andrewfava.com/">Portfolio</a></div>
        </p>
      </div>
      </div>

        <div className="split-right">



        <h1>Functionality</h1>
        <p>
          <strong>Workout Plans</strong>
          <div>Users have full <strong>CRUD</strong> capabilities on Workout Plans. Meaning, a user can Create a Workout Plan and Delete their Workout Plans.</div>
        </p>
        <p>
          <strong>Workouts</strong>
          <div>Users have full <strong>CRUD</strong> capabilities on Workouts. Meaning, a user can add workouts to their plan and delete workouts from their plans.</div>
        </p>
        <p>
          <strong>Workout Filters</strong>
          <div>Users can filter workouts by equipment. This filter was implemented on the FrontEnd.</div>
        </p>
        <p>
          <strong>Purpose</strong>
          <div>I really wanted to keep this app simple and straight forward to not over complicate an already complicated hobby.
            Just create a workout plan and Get After It!
          </div>
        </p>

        <div className="tech-stack">
          <h1>Technologies Used</h1>
          <p>
            <strong>Frontend</strong>
            <div>React, Redux, JavaScript, CSS, and MaterialUI(Modals)</div>
          </p>
          <p>
            <strong>Backend</strong>
            <div>Python, Flask, SQLAlchemy(ORM), and PostgreSQL</div>
          </p>
          <p>
            <strong>APIs</strong>
            <div>RapidApi Workouts</div>
          </p>
        </div>



      </div>
    </div>
    </>
  )
}

export default About
