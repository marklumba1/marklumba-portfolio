import "./heading.css"
const Heading = ({title, number}) => {
    return ( 
        <div className="heading-container gs_reveal_fromLeft has_delay">
            <h1>{title}</h1>
            <div></div>
        </div>
     );
}
 
export default Heading;