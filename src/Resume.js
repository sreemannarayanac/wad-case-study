import React from 'react';

const Resume = () => {
    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science and Engineering',
            university: 'GITAM University',
            graduationDate: '2025',
            courses: ['Data Warehousing and Mining', 'Artificial Intelligence', 'Cryptogrphy and Network Security', 'Database Management Systems'],
        }
    ];

    const experience = [
        {
            title: 'ML/NLP Intern',
            company: 'Alcovex Product Studio',
            startDate: '2024',
            endDate: 'Present',
            responsibilities: [
                'Developed an enhanced computer vision model using OpenCV and Python, significantly improving motion detection accuracy compared to the previous model.',
                'Used the OpenAI API to significantly reduce compute resources required for document analysis, resulting in more efficient processing and reduced response time by 50%.',
                'Refined ML model performance, reducing processing time by nearly 20% and enhancing efficiency on remote Linux virtual machines.',
                'Documented performance of 3 APIs using Postman and presented multiple reports.',
                'Utilized tools such as Git and GitHub and made multiple commits to the project repository'
            ],
        }
    ];

    const projects = [
        {
            title: 'Loan Approval Prediction',
            month: 'May 2023',
            details: [
                'Trained and optimized models using logistic regression, decision trees, and random forest classifier.',
                'Improved model performance with stratified k-fold cross-validation and grid search CV.',
                'Achieved 0.864 accuracy predicting loan approval using machine learning on historical credit data.'
            ],
        }, 
        {
            title: 'Clothes Image Classification using Convolutional Neural Network',
            month: 'Dec 2023',
            details: [
                'Applied Convolutional Neural Network to classify 3000+ diverse sets of clothes images.',
                'Utilized transfer learning, hyperparameter tuning, data augmentation, checkpointing, and regularization.',
                'Leveraged CUDA and cuDNN for GPU-accelerated code execution, significantly reducing inference time.',
            ]
        }
    ];

    const skills = {
        Languages: ['Python', 'Java', 'C', 'SQL'],
        Frameworks: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-Learn'],
        Tools: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS', 'Linux', 'Jupyter Notebook'],
    };

    const certifications = [
        {
            title: 'IBM Data Science Professional Certification',
            issuedBy: 'Coursera',
            date: '2024',
        },
        {
            title: 'AWS Educate Introduction to Cloud 101',
            issuedBy: 'AWS Educate',
            date: '2024'
        },
        {
            title: 'Decoding Machine Learning Workshop Instructor and Organizer',
            issuedBy: 'Meta Developers Communities',
            date: '2023'
        }
    ]

    const contact = {
        email: 'sreemannarayanac2003@gmail.com',
        phone: '+919755978068',
        linkedin: 'linkedin.com/in/sreemannarayana-chamarti',
        github: 'github.com/sreemannarayanac'
    }

    const extraCurriculars = [
        {
            title: 'Head of Operations',
            organization: 'Mera Developers Community, GITAM Visakhapatnam',
            duration: '2023 - 2024',
            description: 'Organized and executed 15+ events and workshops on diverse technologies, fostering a collaborative learning environment for students.'
        },
        {
            title: 'President',
            organization: 'Pioneers Club, GITAM Visakhapatnam',
            duration: '2023 - 2024',
            description: 'Founded and established the club\'s team structure, launched multiple initiatives and positioned the club as the sole club dedicated to self-learning.'
        }
    ];

    return (
        <section id="resume" style={{ padding: '2rem 0', margin: '2rem', textAlign: 'left', border: '2px solid black'}}>
            <h2 style={{ textAlign: 'center', fontSize: '32pt', marginBottom: '1rem' }}>Chamarti Sreemannarayana</h2>
            <div style={{ marginLeft: '12.5rem', marginRight: '12.5rem', textAlign: 'center' }}>
                <p>{contact.email} <strong>|</strong> {contact.phone} <strong>|</strong> {contact.linkedin} <strong>|</strong> {contact.github}</p>
            </div>

            <div style={{ marginLeft: '12.5rem', marginRight: '12.5rem', textAlign: 'justify' }}>
                <h3 style={{ marginTop: '2rem', fontSize: '24pt', marginBottom: '0' }}>Education</h3>
                <hr style={{ width: '100%', margin: 'auto', borderTop: '2px solid black' }} />
                {education.map((item, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <h4 style={{ marginBottom: '0rem', fontSize: '18pt' }}>{item.degree}</h4>
                        <p style={{ marginBottom: '0rem' }}>{item.university}, {item.graduationDate}</p>
                        <p style={{ marginBottom: '0rem' }}><b>Courses:</b> {item.courses.join(', ')}</p>
                    </div>
                ))}

                <h3 style={{ marginTop: '2rem', fontSize: '24pt', marginBottom: '0' }}>Experience</h3>
                <hr style={{ width: '100%', margin: 'auto', borderTop: '2px solid black' }} />
                {experience.map((item, index) => (
                    <div key={index} style={{ marginBottom: '0', marginTop: '0' }}>
                        <h4 style={{ marginBottom: '0rem', fontSize: '18pt' }}>{item.title}</h4>
                        <p style={{ marginBottom: '0rem' }}>{item.company}, {item.startDate} - {item.endDate}</p>
                        <ul>
                            {item.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h3 style={{ marginTop: '2rem', fontSize: '24pt', marginBottom: '0' }}>Projects</h3>
                <hr style={{ width: '100%', margin: 'auto', borderTop: '2px solid black' }} />
                {projects.map((project, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <h4 style={{ marginBottom: '0rem', fontSize: '18pt' }}>{project.title}</h4>
                        <p style={{ marginBottom: '0rem' }}>{project.month}</p>
                        <ul>
                            {project.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h3 style={{ marginTop: '2rem', fontSize: '24pt', marginBottom: '0rem' }}>Skills</h3>
                <hr style={{ width: '100%', margin: 'auto', borderTop: '2px solid black' }} />
                <p><b>Languages:</b> {skills.Languages.map((skill, index) => (
                        <span key={skill} style={{ margin: '0.2rem' }}>{skill}</span>
                    ))}
                </p>
                <p><b>Frameworks:</b> {skills.Frameworks.map((skill, index) => (
                        <span key={skill} style={{ margin: '0.2rem' }}>{skill}</span>
                    ))}
                </p>
                <p><b>Tools:</b> {skills.Tools.map((skill, index) => (
                    <span key={skill} style={{ margin: '0.2rem' }}>{skill}</span>
                ))}</p>

                <h3 style={{ marginTop: '2rem', fontSize: '24pt', marginBottom: '0rem' }}>Certifications</h3>
                <hr style={{ width: '100%', margin: 'auto', borderTop: '2px solid black' }} />
                {certifications.map((certification, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <ul style={{ paddingLeft: '1rem' }}><li>
                            <h4 style={{ margin: '0rem', fontSize: '14pt' }}>{certification.title}</h4>
                            <p style={{ margin: '0rem' }}>{certification.issuedBy}, {certification.date}</p>
                        </li></ul>
                    </div>
                ))}

                <h3 style={{ marginTop: '2rem', fontSize: '24pt', marginBottom: '0' }}>Extra Curriculars</h3>
                <hr style={{ width: '100%', margin: 'auto', borderTop: '2px solid black' }} />
                {extraCurriculars.map((activity, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <ul style={{ paddingLeft: '1rem' }}><li>
                            <h4 style={{ margin: '0', fontSize: '16pt' }}>{activity.title}</h4>
                            <p style={{ margin: '0' }}>{activity.organization}, {activity.duration}</p>
                            <p style={{ margin: '0' }}>{activity.description}</p>
                        </li></ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Resume;