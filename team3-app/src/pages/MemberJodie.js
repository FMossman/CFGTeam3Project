import React from 'react';
import JodieImg from './images/JodieHols.png';
import './Member.css'
import { SocialIcon } from 'react-social-icons';

const github_url = "https://github.com/Tennjo17"
const gmail_url = "https://mail.google.com"
const email_url = "jodietennant17@gmail.com"
const whatsapp_url = "https://whatsapp.com"

const Member2 = () => {
return (
    <div>
        <section className="header-section">
            <h1>About Jodie</h1>
        </section>
        <section className="img-section"> 
            <img className="img-profile" src={JodieImg} alt="JodieImg"></img>
        </section>
        <section className="right-section"> 
            <div>
                <p className="section-title-right">Occupation</p>
            </div>
            <div className="section-list">
                <ul>
                    <li>Teacher</li>
                    <li>Physics</li>
                    <li>Science</li>
                </ul>
            </div>
        </section>
        <section className="left-section"> 
            <div>
                <p className="section-title-left">Hobbies</p>
            </div>
            <div className="section-list">
                <ul>
                    <li>Football</li>
                    <li>Walking</li>
                    <li>Gardening</li>
                </ul>
            </div>
        </section>
        <section className="right-section"> 
            <div>
                <p className="section-title-right">Contact</p>
            </div>
            <div className="section-list">
                <ul>
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