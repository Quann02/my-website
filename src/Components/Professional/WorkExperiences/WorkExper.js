import React from "react";
import './WorkExper.css';

function WorkExper() {
    return (
        <div className="work-exper">
            <h1>Work Experience</h1>
            
            <div className="work-item">
                <h2>IT Project Specialist Intern</h2>
                <p className="company-location">Societal Aspiration Start-up | Remote</p>
                <p className="work-dates">August 2024 - Present</p>
                <ul className="work-description">
                    <li>Collaborated with the CISO and senior leaders to design and implement security strategies that strengthened the organization’s cybersecurity foundation and aligned it with industry best practices.</li>
                    <li>Played a key role in security incident response, driving investigations and timely resolutions that cut response time by 20% and minimized operational disruption.</li>
                </ul>
            </div>
            
            <div className="work-item">
                <h2>Student Database and IT Assistant</h2>
                <p className="company-location">FIUTS - UW | Seattle, WA</p>
                <p className="work-dates">September 2024 - Present</p>
                <ul className="work-description">
                    <li>Automated workflows for 30,000 Salesforce contacts, increasing donations by 15%, saving $5,000 annually, and reducing management time by 20%.</li>
                    <li>Led the evaluation and migration of new email marketing services, seamlessly integrating them into Salesforce and reducing annual email marketing costs by $3,000.</li>
                </ul>
            </div>

            <div className="work-item">
                <h2>Cybersecurity Intern</h2>
                <p className="company-location">Carnegie Mellon University | Pittsburgh, PA</p>
                <p className="work-dates">June 2024 - August 2024</p>
                <ul className="work-description">
                    <li>Analyzed network traffic to monitor simulated cyber attacks, identifying malicious actions and tracing sources of data exfiltration.</li>
                    <li>Conducted in-depth research on firewall performance metrics, recommending enhancements aligned with NIST 800-53 guidelines to strengthen security effectiveness for CERT and Department of Defense sponsors.</li>
                    <li>Evaluated methods to secure and protect organizational data assets, applying database security measures such as access controls, encryption, and SQL injection prevention.</li>
                </ul>
            </div>
        </div>
    );
}

export default WorkExper;
