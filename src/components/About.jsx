import React from 'react'
import '../styles/about.css'
// import pdfFile from 'assets/Firdaws-Resume.pdf';

export default function About() {

    const handleDownload = () => {
        const pdfFilePath = `${process.env.PUBLIC_URL}/assets/resume.pdf`; // Construct the path to the PDF file

        const link = document.createElement('a');
        link.href = pdfFilePath; // Set the href attribute to the path of the PDF file
        link.download = 'resume.pdf'; // Set the download attribute with the desired file name
        link.click(); // Programmatically click the link to start the download
    };


    return (
        <section id='about' className='section aboutContainer'>
            <div className="title">about
                <div className="titleCircle tc1"></div>
                <div className="titleCircle tc2"></div>
                <div className="titleCircle tc3"></div>
            </div>
            <div className="aboutWrapper">
                <img src="assets/about-img.jpg" alt="" className="aboutImg" />
                <div className="aboutRight">
                    <div className="aboutItem">
                        <img src="assets/icon/passion.png" alt="" className='lg-icon' />
                        <div className="aboutItemText">
                            <h3 className="aboutItemTitle">PASSION</h3>
                            <p className="aboutItemDecs">I am a self driven, innovative, young and creative individual with keen interest to learning, building stuff and solving problems.</p>
                        </div>
                    </div>

                    <div className="aboutItem">
                        <img src="assets/icon/skill.png" alt="" className='lg-icon' />
                        <div className="aboutItemText">
                            <h3 className="aboutItemTitle">SKILL SET</h3>
                            <p className="aboutItemDecs">I am skilled in HTML, CSS, Javasript, ReactJs, Sass and bootstrap, I am also proficient in working with Git and Github.</p>
                        </div>
                    </div>

                    <div className="aboutItem">
                        <img src="assets/icon/responsive.png" alt="" className='lg-icon' />
                        <div className="aboutItemText">
                            <h3 className="aboutItemTitle">DESIGNS OUTLOOK</h3>
                            <p className="aboutItemDecs">I create mobile responsive websites and webApps, ensuring optimal performance, and seamless user experience.</p>
                        </div>
                    </div>
                    {/* <div className="resume">
                        <a href="assets/file.doc" download="file.doc">Download my resume</a>
                    </div> */}

                    <button className='resume' onClick={handleDownload}>Download my resume</button>
                </div></div>
        </section>
    )
}
