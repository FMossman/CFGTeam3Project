import React from 'react';
import JodieImg from './images/JodieHols.png';
import './Member.css'



const Member2 = () => {
return (
    <div>
        <section className="header-section">
            <h1>About Jodie</h1>
        </section>
        <section className="img-section"> 
            <img className="img-profile" src={JodieImg} alt="JodieImg"></img>
        </section>
        <section className="left-section"> 
            <div>
                <p className="section-title-left">Occupation</p>
            </div>
            <div className="section-list">
                <ul>
                    <li>Teacher</li>
                    <li>Physics</li>
                    <li>Science</li>
                </ul>
            </div>
        </section>
        <section className="right-section"> 
            <div>
                <p className="section-title-right">Hobbies</p>
            </div>
            <div className="section-list">
                <ul>
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
                <ul>
                    <li>jodietennant17@gmail.com</li>
                    <li>07762514233</li>
                    <li>https://github.com/Tennjo17</li>
                </ul>
            </div>
        </section>
    </div>
);
};





export default Member2;