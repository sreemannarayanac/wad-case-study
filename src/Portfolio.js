import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Loan Approval Prediction',
            description: 'Trained and optimized models using logistic regression, decision trees, and random forest classifier. Improved model performance with stratified k-fold cross-validation and grid search CV. Achieved 0.864 accuracy predicting loan approval using machine learning on historical credit data.',
            // image: 'path/to/image1.jpg',
            link: 'https://github.com/sreemannarayanac/Projects/tree/main/Loan%20Prediction%20Practice%20Problem',
        },
        {
            title: 'Clothes Image Classification using Convolutional Neural Network',
            description: 'Applied Convolutional Neural Network to classify 3000+ diverse sets of clothes images. Utilized transfer learning, hyperparameter tuning, data augmentation, checkpointing, and regularization. Leveraged CUDA and cuDNN for GPU-accelerated code execution, significantly reducing inference time.',
            // image: 'path/to/image2.jpg',
            link: 'https://github.com/sreemannarayanac/Projects/tree/main/CNN%20Clothes%20Image%20Classification',
        },
    ];

    return (
        <section id="portfolio" style={{ padding: '2rem 0' }}>
            <h2 style={{ textAlign: 'center' }}>Portfolio</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            margin: '1rem',
                            width: '45%',
                            maxWidth: '500px',
                            padding: '1rem',
                            border: '2px solid #000',
                            borderRadius: '10px',
                            transition: 'transform 0.3s ease-in-out, z-index 0.3s ease-in-out', 
                            position: 'relative', 
                            zIndex: 1,
                            backgroundColor: 'whitesmoke',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.2)';
                            e.currentTarget.style.zIndex = 2;
                            // e.currentTarget.shadowRoot = '10px 10px 10px rgba(0, 0, 0, 0.2)'; 
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.zIndex = 1; 
                            // e.currentTarget.shadowRoot = 'none';
                        }}
                    >
                        {/* <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} /> */}
                        <h3 style={{ marginTop: '0.5rem' }}>{project.title}</h3>
                        <hr style={{ margin: '0.5rem 0', borderTop: '1px solid black' }} />
                        <p style={{ textAlign: 'justify' }}>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                marginTop: '1rem',
                                textAlign: 'center',
                                padding: '0.5rem',
                                borderRadius: '5px',
                            }}
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
