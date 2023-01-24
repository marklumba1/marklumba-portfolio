import { useState } from "react";
import Heading from "../../components/heading/Heading";
import TabContent from "../../components/tabcontent/TabContent";
import "./experience.css"
const Experience = () => {
    const tabContent = [{
        position: `Web Developer`,
        company: `Jose B. Lingad Memorial General Hospital `,
        workingYears: `April 2022 - Present`,
        summary: `I am employed as a web developer at 
        Jose B. Lingad Memorial General Hospital 
        to create web-based applications utilizing Vue3, 
        JavaScript, HTML, and CSS. We used MySQL 
        and SQL Server for our backend. Our apps' main objectives 
        were to manage patients' clinical information and handle 
        invoicing and related tasks.`
    },
    {
        position: `Project Development Officer III`,
        company: `Department of Information and Communications Technology`,
        workingYears: `Jul 2021 - March 2022`,
        summary: `During my tenure at Department of Information and Communications Technology, 
        I was assigned to the ICT Academy program, 
        where we assisted other government employees in obtaining their IT certifications, 
        such as those from Microsoft, Cisco, and Comptia, through trainings and seminars. 
        I also contributed to the creation of the ict academy website utilizing wordpress, 
        javascript, and HTML.`
    },
    {
        position: `Associate Software Engineer`,
        company: `Accenture`,
        workingYears: `May 2017 - Mar 2018`,
        summary: `For my first job, I worked for Accenture as an associate software developer. 
        My first role is an associate in application development, and was assigned to continue  
        development of an app for student enrolment utilizing iOS Swift. 
        In my later projects, I also got the chance to get experience dealing with 
        several frameworks, such as ionic. Additionally, I had the opportunity to work in 
        quality control.`
    },
]

    const [tabIndex, setTabIndex] = useState(0)

   
    const handleClick = (index) => {
        setTabIndex(index)
    }


    return ( 
        <div className="experience-container" id="experience">
            <Heading title="Work Experience" number={2} />
            <div className="inner-experience">
                <div className="tabs gs_reveal_fromLeft has_delay">
                    {tabContent.map((x,index) => (
                        <button key={index} className={tabIndex === index ? 'active-tab tablinks':'inactive-tab tablinks'} onClick={() => handleClick(index)}>{x.company}</button>
                    ))}
                </div>
              
                <TabContent className="tab-content" tabContentData={tabContent[tabIndex]} />
               

            </div>
        </div>
     );
}
 
export default Experience;