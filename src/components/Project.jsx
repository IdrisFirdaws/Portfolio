import React from 'react';
import '../styles/project.css'
import { Projects } from './Data';


export default function Project() {
    return (
        <section id='project' className="section projectContainer">
            <div className="title">projects
                <div className="titleCircle"></div>
                <div className="titleCircle"></div>
                <div className="titleCircle"></div>
            </div>
            <div className="projects">
                {
                    Projects.map((p, id) =>
                        <div className='projectItem' key={id}>
                            <a href={p.demo}>
                                <img src={p.image} alt="" className='projectImage' />
                                <h3 className="projectItemTitle">{p.title}</h3>
                                <p className="projectDecs">{p.desc}</p>

                                <ul className="projectSkills">
                                    {
                                        p.skills.map((s, id) =>
                                            <li key={id} className='projectSkillsItem'>
                                                {s}
                                            </li>)
                                    }
                                </ul>
                                <div className="projectLinks">
                                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className='projectLinkItem'>
                                        Demo
                                    </a>

                                    <a href={p.source} target="_blank" rel="noopener noreferrer" className='projectLinkItem'>
                                        Source
                                    </a>
                                </div>
                            </a>
                        </div>)
                }
            </div>
        </section>
    )
}
