import "./skill.css"
const Skill = ({data}) => {
    return ( 
        <div className="skill-container">
            <div>{data.icon}</div>
            <p>{data.skill}</p>
        </div>
     );
}
 
export default Skill;