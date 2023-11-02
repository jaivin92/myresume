import aboutmeimg  from "../img/about-me2.JPEG"

const AboutMe = () => {
    return (
        <section id="AboutMe" className="about--section">
          <div className="about--section--img">
            <img src={aboutmeimg} alt="About Me" style={{width:500, height:600}} />
          </div>
          <div className="hero--section--content--box about--section--box">
            <div className="hero--section--content">
              <p className="section--title">About</p>
              <h1 className="skills-section--heading">About Me</h1>
              <p className="hero--section-description">
              I am having around 4+ years of experience in Android App development. And I have worked on many large applications like Rental Agreement and more. Troubleshoot and debug program bugs and modify existing programs with enhancements. Sustaining testing environments and production releases. Innovative problem solver, able to see the business and technical sides of a problem. 
              </p>
              <p className="hero--section-description">
              Extensive experience with Android Application technologies like Java, Kotlin, Flutter,React Js. , Firebase.
              Web techonologies frontend and backend with mongoDB.
              </p>
            </div>
          </div>
        </section>
      );
}

export default AboutMe;