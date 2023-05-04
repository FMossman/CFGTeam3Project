import React from 'react';
import Member from '../components/MemberCard';




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
            <Member name='Jodie' age='39' />
          </a>
          <div className="memberCard">
            <button className="addMemberButton">+</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;