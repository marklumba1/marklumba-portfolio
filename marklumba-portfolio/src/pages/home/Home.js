import "./home.css"
const Home = () => {
    return ( 
        <div className="home-container" id="home">
            <div className="hero">
                <div className="header-small gs_reveal_fromLeft">
                    Hi, my name is
                </div>
                <div className="header-big gs_reveal_fromLeft">
                   Mark Lumba.
                </div>
                <div className="header-big header-secondary gs_reveal_fromLeft has_delay">
                I make things with <span>&lt;JavaScript/&gt;</span>.
                </div>
                <div className="header-bottom gs_reveal_fromRight">
                    <p>
                    I'm a web developer who enjoys coding in JavaScript, 
                    particularly with frameworks such as React and Vue.
                    I also dabble on Core CSS and its frameworks, such as Tailwind CSS and Bootstrap.
                    </p>
                </div>
                <div>
                    <button onClick={() => window.location.href = "https://www.linkedin.com/in/mark-lumba-bb6401133/"}>Show  More</button>
                </div>
              
            
            </div>
        </div>
     );
}
 
export default Home;