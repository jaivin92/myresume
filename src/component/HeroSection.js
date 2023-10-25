//import image from "../img/hero_img.png"
import image from "../img/about-me2.JPEG"
// myresume/
const HeroSection = () => {
    return (
        <section id="heroSection" className="hero--section">
          <div className="hero--section--content--box">
            <div className="hero--section--content">
              <p className="section--title">Hey, I'm Jaivin Mungara</p>
              <h1 className="hero--section--title">
                <span className="hero--section-title--color">Full Stack</span>{" "}
                <br />
                Developer
              </h1>
              <p className="hero--section-description">
              I have 4+ years of experience as a Mobile Application developer
                <br /> specializing in Java, Kotlin, Flutter, React JS, and the MERN Stack.
              </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
          </div>
          <div className="hero--section--img">
            <img src={image} alt="Hero Section" />
          </div>
        </section>
      );
}

export default HeroSection;