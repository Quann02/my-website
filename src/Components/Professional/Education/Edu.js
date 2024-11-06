import React from "react";
import './Edu.css';
import uwLogo from '../../imgs/University of Washingotn.jpg';

function Edu() {
    return (
        <div className='education' id='edu-section'>
            <h1>Education</h1>
            <div className='edu-header'>
                <div className='edu-details'>
                    <h2>University of Washington, Seattle, WA</h2>
                    <p>
                        <strong>Bachelor of Science in Informatics (Cybersecurity)</strong> <br />
                        Expected Graduation: December 2025 <br />
                        GPA: 3.4
                    </p>
                    <p>
                        <strong>Relevant Coursework:</strong> Information Security, Cybersecurity, Web Development, Data Programming, Data Management and Security, Network Defenses, Risk Assessment, Product Management
                    </p>
                </div>
                <img src={uwLogo} alt="University of Washington Logo" className="edu-logo" />
            </div>
        </div>
    );
}

export default Edu;
