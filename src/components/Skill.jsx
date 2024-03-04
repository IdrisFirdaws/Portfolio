import React from 'react'
import '../styles/skill.css'
import { SkillSet, Tools } from "./Data"

export default function Skill() {
    return (
        <section id='skill' className='section skillContainer'>

            <div className="skillWrapper">
                <h2 className="skillTitle">Skills</h2>
                <div className="skills">

                    {SkillSet.map((skill, id) => (
                        <div key={id} className="skillItem">
                            <div className="skillImgContainer">
                                <img src={skill.image} alt={skill.title} className='skillImage' />
                            </div>
                            <p className="skillTitle">{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='skillWrapper'>
                <h2 className="skillTitle">Tools</h2>
                <div className="skills">

                    {Tools.map((tool, id) => (
                        <div key={id} className="skillItem">
                            <div className="skillImgContainer tool">
                                <img src={tool.image} alt={tool.title} className='skillImage' />
                            </div>
                            <p className="skillTitle">{tool.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section >
    )
}
