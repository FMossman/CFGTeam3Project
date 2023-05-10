import React from 'react';
import Member from '../components/MemberCard';

/* I'm trying to see if I can set up an array of members to use and loop through to create the cards automatically and then when someone hits the add member card it will generate another card with the new info...
const member = [];
member[0] = {name:"Fiona", age:"39", background: "Worked in film and television before becoming a primary school teacher and is now wanting to switch careers."};
member[1] = {name:"Jodi", age:"??", background: "???????"};
member[2] = {name:"Erin", age:"??", background: "???????"};
*/


function Home() {
    return (
      <div className="mainSection">
        <div className="header">
          <h1>CFG Team 3</h1>
        </div>
        <div className="memberCardsContainer">
          <a href="./Member1">
            <Member name='Fiona' age='39' />
          </a>
          <a href="./Member2">
            <Member name='Jodie' age='??' />
          </a>
          <a href="./Member3">
            <Member name='Erin' age='??' />
          </a>
          <div className="memberCard">
            <button className="addMemberButton">+</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;

