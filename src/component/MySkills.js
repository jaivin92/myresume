import data from "../data/index.json"
import skill1 from "../img/product-chain-1.png"
import skill2 from "../img/tag-1.png"
import skill3 from "../img/feather-pen-2.png"
import skill4 from "../img/feather-pen-1.png"

const MySkills = () => {

  

  const getImage = (index) => {
    console.log("Hello world!", index)
    
      if(index ===0) {
          return <img src={skill1} alt="Product Chain" />
      } else if(index === 1) {
        return <img src={skill2} alt="Product Chain" />
      } else if(index === 2) {
        return <img src={skill3} alt="Product Chain" />
      } else if(index === 3) {
        return <img src={skill4} alt="Product Chain" />
      }
        
  }
    return (
        <section className="skills--section" id="mySkills">
          <div className="portfolio--container">
            <p className="section--title">My Skills</p>
            <h2 className="skills--section--heading">My Expertise</h2>
          </div>
          <div className="skills--section--container">
            {data?.skills?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                  {/* <img src={item.src} alt="Product Chain" /> */}
                  { getImage(index) }
                </div>
                <div className="skills--section--card--content">
                  <h3 className="skills--section--title">{item.title}</h3>
                  <p className="skills--section--description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

export default MySkills;