import "./contact.css"
import {AiFillFacebook, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
const Contact = () => {
    return ( 
        <div className="contact-container" id="contact">
            <div className="contact-inner">

           
                <h1>Contact</h1>
                <h2 className="heading gs_reveal_fromRight">Reach me out.</h2>
                <button className="has_delay" onClick={() => window.location.href ="https://mail.google.com/mail/u/0/?fs=1&to=marklumba1@gmail.com&su=hi%20Mark&body=&bcc=&tf=cm"}>Say Hello</button>
            
                <span className="socials">
                    <ul>
                            <li onClick={() => window.location.href = "https://web.facebook.com/mark.lumba.71"}><AiFillFacebook  size={30}/></li>
                            <li onClick={() => window.location.href ="https://www.linkedin.com/in/mark-lumba-bb6401133/"}><AiFillLinkedin size={30} /></li>
                            <li onClick={() => window.location.href ="https://mail.google.com/mail/u/0/?fs=1&to=marklumba1@gmail.com&su=hi%20Mark&body=&bcc=&tf=cm"}><AiTwotoneMail size={30} /></li>
                    
                    </ul>
                </span>
            </div>
        </div>
     );
}
 
export default Contact;