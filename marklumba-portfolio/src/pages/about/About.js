import "./about.css"
import mypicture from "../../assets/images/mypicture.jpg"
import Heading from "../../components/heading/Heading";
const About = () => {
    return ( 
        <div className="about-container" id="aboutme">
            <Heading title="About Me" number={1}/>
            <div className="inner-about">
                <div className="about">
                    <p>My name is Mark, and I like to work with JavaScript. 
                        My web programming adventure began in college, 
                        when I took my first coding classes, 
                        which taught me the fundamentals of web development.
                    </p>
                    <p>
                    Working for large corporations and various government agencies over the years, 
                    I've gained knowledge and experiences that are now helping me 
                    to advance my career and be more effective on what I do.
                    </p>
                    <p>
                    I'm currently honing my React, Vue, and API Programming skills in order to create more complex web apps.
                    </p>
                    <p>
                    Here are a few technologies I've recently worked with:
                    </p>
                </div>
                <div className="image-container gs_reveal_fromRight has_delay">
                    <div className="img">
                        <img src={mypicture} alt="mark" />
                        <div className="border-img"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        
     );
}
 
export default About;