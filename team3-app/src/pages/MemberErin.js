import React from 'react';
import './Member.css'
import { SocialIcon } from 'react-social-icons';

const github_url = "https://github.com/"
const gmail_url = "https://mail.google.com"

const email_url = "fyfemcwilliam@gmail.com"

const whatsapp_url = "https://whatsapp.com"

const Member3 = () => {
return (
    <div className="member-page">
        <section className="header-section">
            <h1>About Erin</h1>
        </section>
        <section> 

            <div className="img-profile-erin"></div>

        </section>
        <section className="left-section"> 
            <div>
                <p className="section-title-left">Occupation</p>
            </div>
            <div className="section-list">
                <ul className="list-middle" >
                    <li>Offender Employability Mentor</li>
                    <li>Dog-sitter</li>
                    <li>Waitress</li>
                    <li>Deliveroo Rider</li>

                </ul>
            </div>
        </section>
        <section className="colour-section"> 
            <div>
                <p className="section-title-left">Hobbies</p>
            </div>
            <div className="section-list">
            <ul className="list-middle" >

                    <li>Renovating my Defender into a camper</li>
                    <li>Hikes with the dogs</li>
                    <li>Being at the beach</li>

                </ul>
            </div>
        </section>
        <section className="left-section"> 
            <div>
                <p className="section-title-left">Contact</p>
            </div>
            <div className="section-list">
            <ul className="list-left" >
                <li><SocialIcon url={github_url} fgColor="#fff"  />{github_url}</li>
                <li><SocialIcon url={gmail_url} fgColor="#fff"  />{email_url}</li>

                <li><SocialIcon url={whatsapp_url} fgColor="#fff"  />07488932404</li>

                </ul>
            </div>
        </section>
    </div>
);
};

export default Member3;