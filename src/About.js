import React from 'react';
import aboutMeImage from './aboutMeImage.jpg'; // Import your image

const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'black', color: 'white' }}>
            <div style={{ display: 'flex', margin: '' }}>
                <img src={aboutMeImage} alt="About" style={{
                        width: '30%',
                        height: '100%',
                    }}
                />
                <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <h2 style={{ textAlign: 'center', margin: '1rem', color: 'orange', fontSize: '28pt'}}>About Me</h2>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ marginBottom: '1rem', fontSize: '16pt' }}>
                                I am a highly motivated and results-driven individual with a strong passion for software development. I enjoy learning new technologies and taking on challenging projects.
                            </p>
                            <p style={{ marginBottom: '1rem', fontSize: '16pt' }}>
                                In my free time, I enjoy reading, hiking, and playing guitar. I am also an active member of my local tech community, where I regularly attend meetups and workshops.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
