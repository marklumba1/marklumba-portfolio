import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Work from "./pages/work/Work"
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import SkillSet from "./pages/skillset/SkillSet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const App = () => {
     gsap.registerPlugin(ScrollTrigger);
     const ref = useRef();

     const hideElem = (elem) => {
          gsap.set(elem,{autoAlpha:0})
     }

     const animateFrom = (elem, direction) => {
          direction = direction || 1;
          let delay = 0 
          var x = 0,
              y = direction * 100;
          if(elem.classList.contains("has_delay")) {
          delay = 0.5;
          }
          if(elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
          } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
          }
          elem.style.transform = "translate(" + x + "px, " + y + "px)";
          elem.style.opacity = "0";
          gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 1, 
            delay: delay,
            x: 0,
            y: 0, 
            autoAlpha: 1, 
            ease: "expo", 
            overwrite: "auto"
          });
     }

    





     useEffect(()=>{
          const createScrollTrigger = (element) => {
               ScrollTrigger.create({
                    trigger: element,
                    // markers: true,
                    onEnter: () =>  animateFrom(element), 
                    onEnterBack: () => animateFrom(element, -1),
                    onLeave: () => hideElem(element) // assure that the element is hidden when scrolled into view
                  });
          }
          
          [...ref.current.children].forEach(element => {
                [...element.children].forEach(echild => {

                    createScrollTrigger(echild);

                    [...echild.children].forEach(egrandchild => {
                         createScrollTrigger(egrandchild)
                    })

                })

                
          })
    
         
     },[])
    return ( 
       <div className="content">
            <Navbar />
            <div className="page-container">
               <div className="pages" ref={ref}>
                    <Home />
                    <About/>
                    <SkillSet />
                    <Experience/>
                    <Work />
                    <Contact />
               </div>
               
            </div>
            <Footer />
         
            
            
       </div>
     );
}
 
export default App;
