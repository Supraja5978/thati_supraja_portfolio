import React from "react";
import "../Styles/Projects.css";
const Supraja_Projects = [
        {
        title: 'Portfolio Website',
        desc: 'A responsive React portfolio showcasing projects and skills. Built with React Router and modern CSS.',
        },
        {
        title: 'Mini E-commerce UI',
        desc: 'A front-end demo for product listing, filters and a cart using React state and localStorage.',
        },
        {
        title: 'Crime Analysis and Prediction(Minor Project) ',
        desc: 'I developed a machine learning predictive model that analyzes historical crime data with over 85% accuracy, enhancing local law enforcements resource allocation and community safety by integrating visual data.',
        },
        {
        title: 'Division and Replication of Data in Cloud for Optimal Performance and Security(DROPS)',
        desc: 'I developed and implemented a scalable algorithm that optimizes data storage and retrieval across multiple nodes, enhancing performance and security, which led  to a 30% improvement in data retrieval speed and increased resilience against breaches, with my findings earning',
        }
];
const Projects = () =>{
    return(
        <section className="section-container">
        <h2>Projects</h2>
        <div className="projects-grid">
        {Supraja_Projects.map((p, idx) => (
        <article key={idx} className="project-card">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        </article>
        ))}
        </div>
        </section>
    );
}
export default Projects;
