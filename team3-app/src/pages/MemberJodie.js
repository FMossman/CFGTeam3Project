import React from 'react';
import './Member.css'
import { SocialIcon } from 'react-social-icons';

const github_url = "https://github.com/"
const gmail_url = "https://mail.google.com"
const email_url = "jtinthehoose@gmail.com"
const whatsapp_url = "https://whatsapp.com"

const Member2 = () => {
return (
    <div className="member-page">
        <section className="header-section">
            <h1>About Jodie</h1>
        </section>
        <section> 
            <div className="img-profile-jodie"></div>
        </section>
        <section className="left-section"> 
            <div>
                <p className="section-title-left">Occupation</p>
            </div>
            <div className="section-list">
                <ul className="list-middle" >
                    <li>Teacher</li>
                    <li>Physics</li>
                    <li>Science</li>
                </ul>
            </div>
        </section>
        <section className="colour-section"> 
            <div>
                <p className="section-title-left">Hobbies</p>
            </div>
            <div className="section-list">
            <ul className="list-middle" >
                    <li>Football</li>
                    <li>Walking</li>
                    <li>Gardening</li>
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
                <li><SocialIcon url={whatsapp_url} fgColor="#fff"  />07762514233</li>
                </ul>
            </div>
        </section>
    </div>
);
};

export default Member2;