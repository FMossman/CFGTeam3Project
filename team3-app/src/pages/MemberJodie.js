import React from 'react';
import JodieImg from './images/JodieHols.png';
import './Member.css'



const Member2 = () => {
return (
    <div>
        <section>
            <h1>About Jodie</h1>
            </section>
        <section className="img-section"> 
            <img className="img-profile" src={JodieImg} alt="JodieImg"></img>
        </section>
        <section className="about-section"> 
            <ul>
                <li>Occupation: Teacher</li>
                <li>Hobbies: Football</li>
                <li>Favourite Food: Pizza</li>
            </ul>
        </section>
    </div>
);
};





export default Member2;