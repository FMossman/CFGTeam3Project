import React from 'react';
import './Member.css'
import { SocialIcon } from 'react-social-icons';

const github_url = "https://github.com/FMossman"
const gmail_url = "https://mail.google.com"
const email_url = "fmcmossman@gmail.com"
const whatsapp_url = "https://whatsapp.com"

const Member1 = () => {
return (
    <div className="member-page">
        <section className="header-section">
            <h1>About Fiona</h1>
        </section>
        <section> 
            <div className="img-profile-fiona"></div>
        </section>
        <section className="left-section"> 
            <div>
                <p className="section-title-left">Occupation</p>
            </div>
            <div className="section-list">
                <ul className="list-middle" >
                    <li>Acting Principal Teacher</li>
                    <li>ICT Coordinator</li>
                    <li>Lead for Digital Learning and Maths</li>
                </ul>
            </div>
        </section>
        <section className="colour-section"> 
            <div>
                <p className="section-title-left">Hobbies</p>
            </div>
            <div className="section-list">
            <ul className="list-middle" >
                    <li>Boardgames</li>
                    <li>Running</li>
                    <li>Reading</li>
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
                <li><SocialIcon url={whatsapp_url} fgColor="#fff"  />07791589896</li>
                </ul>
            </div>
        </section>
    </div>
);
};

export default Member1;
