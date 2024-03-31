import React from 'react';

const Navbar = ({ currentSection, handleNavClick }) => {
    const navStyle = {
        position: 'fixed',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#000',
        padding: '0.5rem',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '0.5rem',
        cursor: 'pointer',
    };

    const activeLinkStyle = {
        color: '#ffaa00',
        fontWeight: 'bold'
    };

    return (
        <nav style={navStyle}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
                <li>
                    <a
                        href="#home"
                        onClick={() => handleNavClick('home')}
                        style={currentSection === 'home' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#resume"
                        onClick={() => handleNavClick('resume')}
                        style={currentSection === 'resume' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        onClick={() => handleNavClick('portfolio')}
                        style={currentSection === 'portfolio' ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
