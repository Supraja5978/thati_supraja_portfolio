import React from "react";
import profileImg from "./Thati_Supraja_Photograph.jpg";
import "../Styles/Home.css"

const Home=()=>{
    return(
        <>
        <div className="home-container">
           <div className="home-content" >
                <h4><i>Hello !!!</i></h4>
                <h1 >I'm Thati Supraja</h1>
                <h3 ><i>Senior Assoicate || Front-End Developer</i></h3>
                <p >I am a Computer Science graduate and Front-End Developer with 
                    experience in React.js, Python, Java, SQL, HTML, CSS, and JavaScript. 
                    I have worked on software testing and development projects, including roles 
                    as an Associate at Proinkfluence IT Solutions and Salesforce internships, 
                    combining strong technical expertise with communication and problem-solving skills.
                </p>
            </div>

            { }
            <div className="home-image" >
                <img src={profileImg} alt="Profile" />
            </div>
        </div>
        </>
    );
}
export default Home;