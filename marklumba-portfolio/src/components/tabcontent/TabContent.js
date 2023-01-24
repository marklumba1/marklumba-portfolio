import "./tabcontent.css"
const TabContent = ({tabContentData}) => {
    return ( 
        <div className="tab-content">
            <h1>{tabContentData.position} @ <span className="span-company">{tabContentData.company}</span></h1>
            <h2>{tabContentData.workingYears}</h2>
            <p>
                {tabContentData.summary}
            </p>
        </div>
     );
}
 
export default TabContent;