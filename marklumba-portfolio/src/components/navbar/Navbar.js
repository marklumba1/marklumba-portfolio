import { useEffect, useState } from 'react'
import {IoChevronForward} from 'react-icons/io5'
import './navbar.css'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [lastValue, setLastValue] = useState(0)
    const handleScroll = () => {
         setScrollPosition((lastScrollPosition) => {
            setLastValue(lastScrollPosition)
            return window.pageYOffset
        })
    }
    useEffect(()=> {
         window.addEventListener(`scroll`, handleScroll,{passive:true})
         return () => window.removeEventListener(`scroll`,handleScroll)
    },[])
    
   
    const [isShowHam, setIsShowHam] = useState(false)
    useEffect(()=>{
    },[isShowHam])

    const handleClickHamburger = () => {
      setIsShowHam(!isShowHam)
    
    }



    return ( 
        <nav>
       
             <div className={lastValue < scrollPosition || isShowHam ? 'navbar-hidden navbar-container' : 'navbar-visible navbar-container'}>
                    <div className="logo">
                        [Mark]
                    </div>

                    <div className="navbar-links">
                        <ol className='menu-list'>
                            <li><a href='#aboutme'>About</a></li>
                            <li><a href='#skillset'>Skills</a></li>
                            <li><a href='#experience'>Experience</a></li>
                            <li><a href='#work'>Work</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <li><a href='resume.pdf' download="resume.pdf">Resume</a></li>
                        </ol>
                        <div onClick={handleClickHamburger} className='menu-hamburger'>
                            <div className='hamburger'></div>
                            <div className='hamburger'></div>
                            <div className='hamburger'></div>
                        </div>
                    </div>
                
                </div>
         
          
                <div className={isShowHam ? 'ham sidebar-visible' : 'ham sidebar-hidden'}>
                     <div className="logo-ham">
                        <IoChevronForward className='carret' onClick={handleClickHamburger} size={50}/>
                        <div className='logo'>[Mark]</div>
                       
                    </div>
                    <div className='menu-list-ham'>
                        <ol>
                            <li><a href='#aboutme'>About</a></li>
                            <li><a href='#skillset'>Skills</a></li>
                            <li><a href='#experience'>Experience</a></li>
                            <li><a href='#work'>Work</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <li><a href='resume.pdf' download>Resume</a></li>
                        </ol>
                    </div>
                </div>
          
            
        
            
        </nav>
     );
}
 
export default Navbar;