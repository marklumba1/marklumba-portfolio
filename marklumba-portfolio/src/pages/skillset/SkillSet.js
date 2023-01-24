import Heading from "../../components/heading/Heading";
import Skill from "../../components/skill/Skill";
import { SiReact, SiVuedotjs, SiTailwindcss, SiJavascript, SiMicrosoftsqlserver, SiMysql, SiPhp, SiHtml5, SiCss3 } from "react-icons/si";
import "./skillset.css"
const SkillSeT = () => {
    const data = [
        {skill:`React JS`, icon:<SiReact size={50}/>},
        {skill:`Vue 3`, icon:<SiVuedotjs size={50}/>},
        {skill:`Tailwind CSS`, icon:<SiTailwindcss size={50}/>},
        {skill:`JavaScript ES6`, icon:<SiJavascript size={50}/>},
        {skill:`Microsoft SQL Server`, icon:<SiMicrosoftsqlserver size={50}/>},
        {skill:`MySQL`, icon:<SiMysql size={50}/>},
        {skill:`PHP`, icon:<SiPhp size={50}/>}, 
        {skill:`HTML5`, icon:<SiHtml5 size={50}/>}, 
        {skill:`CSS `, icon:<SiCss3 size={50}/>}, 
        
    ]
    return ( 
        <div className="skillset-container" id="skillset">
            <Heading title="Current Skill Set" number={2} />
            <div className="skills">
                {data.map((x,index) => (<Skill key={index} data={x}/>))}
            </div>
        </div>
     );
}
 
export default SkillSeT;