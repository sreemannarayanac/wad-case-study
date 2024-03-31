import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '0rem 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '24pt', color: 'darkred' }}><b>Contact Me</b></h2>
                </div>
                <div style={{ flex: 1, justifyContent: 'flex-end', color: "#fff", backgroundColor: 'darkred' }}>
                    <ul style={{ listStyle: 'none', justifyContent: 'flex-end'}}>
                        <li style={{ marginBottom: '1rem' }}>sreemannarayanac2003@gmail.com: Email</li>
                        <li style={{ marginBottom: '1rem' }}>+919755978068: Phone</li>
                        <li style={{ marginBottom: '1rem' }}>linkedin.com/in/Sreemannarayana-chamarti :LinkedIn</li>
                        <li style={{ marginBottom: '1rem' }}>github.com/sreemannarayanac :GitHub</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
