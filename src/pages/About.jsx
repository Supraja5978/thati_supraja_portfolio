import React from "react";
import "../Styles/About.css"
const About = () => {
    return(
        <section className="about-section" >
            <h2 className="section-title">About Me</h2>
            
            <div className="container">
                <div className="about-text"> <p>
            Hi — I'm <strong>Supraja</strong>, a Computer Science graduate and front-end developer based in Hyderabad.
            I have hands-on experience in software testing, automation, and strong fundamentals in Python and Java.
            I enjoy building responsive UI, learning modern React best practices, and creating accessible interfaces.
            </p>
            </div>
            

            <h3 className="sub-heading">Skills</h3>
            <div className="skills-list">
            <span className="skill-item">•HTML • CSS • JavaScript </span>
            <span className="skill-item">•React (Function components, Hooks) </span>
            <span className="skill-item">•Python • Java • SQL </span>
            <span className="skill-item">•Communication • Leadership • Time management • Content writing </span>
            </div>

            <h3 className="sub-heading">Work Experience</h3>

            <div className="exp-card">
                <h4>Senior Associate - Verity & Proinkfluence IT Solutions</h4>
                <p><em>July 2024 - Present | Hyderabad, Telangana, India</em></p>
                <h4><em>Responsibilities</em></h4>
                <ul className="bullet-list">
                    <li><b>Content Creation:</b> Authored and published engaging, audience-focused articles on Medium, IEEE, and Springer platforms.</li>
                    <li><b>Review Management:</b> Analyzed and evaluated feedback to align with brand goals and improve content quality.</li>
                    <li><b>Mentorship:</b> Guided and supported junior associates, promoting their professional development and team performance.</li>
                    <li><b>Platform Engagement:</b> Actively contributed to ADPList, fostering community interaction and knowledge sharing. </li>

                </ul>
            </div>
            <div className="exp-card">
                <h4>Bench Sales Recruiter - WIFI Learning</h4>
                <p><em>Feb 2024 - June 2024 | Remote, India</em></p>
                <h4><em>Responsibilities</em></h4>
                <ul className="bullet-list">
                    <li>Identified and matched tech talent with client requirements across various projects.</li>
                    <li>Engaged with clients to understand technical needs and ensured timely consultant placements. </li>
                    <li>Maintained vendor/client relations, negotiated rates, and handled end-to-end recruitment.</li>
                    <li>Ensured data confidentiality and resolved hiring challenges to support team growth.</li>
                </ul>

            </div>

            <h3 className="sub-heading">Education</h3>
            <div className="edu-card">
                <ul className="bullet-list">
                    <li>B.Tech(CSE) — Anurag Group of Institutions (CGPA: 8.42)</li>
                    <li>Intern — Salesforce-supported roles at SmartInternz</li>
            </ul>
            
            </div>
            </div>
        </section>
    );
}
export default About;