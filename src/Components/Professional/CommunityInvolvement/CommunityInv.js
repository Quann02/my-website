import React from "react";
import './CommunityInv.css';

function CommunityInvolvement() {
    return (
        <div className="community-involvement">
            <h1>Community Involvement</h1>
            
            <div className="involvement-item">
                <h2>ISACA (Student Member)</h2>
                <p className="involvement-dates">September 2024 - Present</p>
                <p className="involvement-description">
                    • Participated in cybersecurity awareness initiatives, working closely with other members to promote best practices for digital security.<br />
                    • Attended workshops and networking events to connect with professionals in the information security field, enhancing my understanding of industry standards.
                </p>
            </div>

            <div className="involvement-item">
                <h2>Volunteer at FIUTS (Foundation for International Understanding Through Students)</h2>
                <p className="involvement-dates">September 2023 - Present</p>
                <p className="involvement-description">
                    • Supported international students with orientation and integration activities, creating an inclusive and supportive environment.<br />
                    • Assisted with organizing events and workshops that fostered intercultural understanding and collaboration.
                </p>
            </div>

            <div className="involvement-item">
                <h2>Green Seattle Partnership</h2>
                <p className="involvement-dates"> September 2020 - June 2022</p>
                <p className="involvement-description">
                    • Continued volunteering during the COVID-19 pandemic, addressing the unchecked growth of invasive species as community efforts were paused.<br />
                    • Increased ecosystem sustainability on indigenous land by reducing and preventing the spread of invasive species.<br />
                    • Promoted ecosystem growth by planting native bushes, trees, and flowers to restore balance in local parks.<br />
                    • Designed flyers for Instagram and Snapchat to promote community involvement and increase volunteer participation.
                </p>
            </div>

            <div className="involvement-item">
                <h2>Sawhorse Revolution Construction (Carpenter & Architecture)</h2>
                <p className="involvement-dates">February 2017 - June 2020</p>
                <p className="involvement-description">
                    • Collaborated in the design and construction of five micro-homes for individuals experiencing homelessness, providing secure housing solutions for families. <br />
                    • Led workshops on carpentry for volunteers, contributing over 90 hours annually to expedite projects and educate participants.
                </p>
            </div>
        </div>
    );
}

export default CommunityInvolvement;
