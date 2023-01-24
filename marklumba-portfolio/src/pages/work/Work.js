import "./work.css"
import BuiltProjects from "../../components/built-projects/BuiltProjects";
import Heading from "../../components/heading/Heading";
import EdifyPic from "../../assets/images/edify.png"
import PortfolioPic from "../../assets/images/portfolio.png"
const Work = () => {
    const data = [
        {title: `Edify - Hospital Information System`,
        summary: `I work on the team that creates Edify HMS, an online application that aids 
        medical professionals in giving patients better care by gathering patient data and 
        information for a quicker exchange of information between physicians, nurses, 
        and other support staff. I was responsible for the modules that handles doctor 
        referrals of patients, warehousing of hospital supplies and statistical reports.`,
        skills:[`Vue 3`, `JavaScript`, `HTML`, `Bootstrap`, `MySQL / SQL Server`],
        picture: EdifyPic
        },
        {title: `Personal Portfolio`,
        summary: `I created my portfolio to showcase my work and let others know about me. 
        It is created using React, TailwindCSS and GSAP for animations.`,
        skills:[`React JS`, `Tailwind`, `GSAP`],
        picture: PortfolioPic
        },

    ]
    return ( 
        <div className="work-container" id="work">
            <Heading title="Recent Projects" number={3} />
            {data && data.map((x,index) => (
                <BuiltProjects key={index} data={x} index={index}/>
            ))}
         

        </div>
     );
}
 
export default Work;