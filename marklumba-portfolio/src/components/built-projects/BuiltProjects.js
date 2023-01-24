import "./built-projects.css"
const BuiltProjects = ({data, index}) => {
    return ( 
        <div className="built-projects-container ">
            <div className={!index % 2 === 0 ? 'project-image' : 'project-image pi-reverse'}>
                <div className="img-container">
                    <div className="overlay"></div>
                    <img src={data.picture} alt="" />
                </div>
            </div>
            <div className={!index % 2 === 0 ? 'project-description' : 'project-description pd-reverse'}>
                <div className="description-container">
                    <h1 className="featured">Recent Project</h1>  
                        <h2 className="project-title">{data.title}</h2>
                        <p className="project-summary">{data.summary}</p>
                        <ul className={!index % 2 === 0 ? 'language-used' : 'language-used lu-reverse'}>
                            {data.skills.map((x,index) => (<li key={index}>{x}</li>))}
                        </ul>
                </div>
                   
            </div>

        </div>
     );
}
 
export default BuiltProjects;