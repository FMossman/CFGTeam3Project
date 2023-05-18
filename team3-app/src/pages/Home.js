import React from 'react';
import Member from '../components/MemberCard';
import AddMemberPopup from '../components/AddMemberPopup';
import { useState } from 'react';
import PropTypes from 'prop-types';


/*Array of members with information*/
const memberArray = [

{name:"Fiona", 
age:"39", 
page: "./Member1", 
picture: ".\\images\\fionamossman.jpg", 
hobbies1:"",
hobbies2:"",
hobbies3:"", 
occupation1:"",
occupation2:"",
occupation3:""},

{name:"Jodie", 
age:"??", 
page: "./Member2", 
picture: ".\\images\\JodieHols.png", 
hobbies1:"", 
hobbies2:"",
hobbies3:"",
occupation1:"",
occupation2:"",
occupation3:""},

{name:"Erin", 
age:"??", 
page: "./Member3", 
picture: ".\\images\\Erin.jpg", 
hobbies1:"", 
hobbies2:"",
hobbies3:"",
occupation1:"",
occupation2:"",
occupation3:""}
];


/*Loops over each index in the array to create an array with the html needed to create the member cards*/
let memberList=[];

memberArray.forEach((member,index)=>{
  memberList.push(
    <a key={index} href={member.page}>
      <Member key={index} name= {member.name} picture= {member.picture}/>
    </a>
  )
})



function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
    return (
      <div className="mainSection">
        <div className="header">
          <h1>CFG Team 3</h1>
        </div>
        <div className="memberCardsContainer">

          { memberList }

          <div className="memberCard">
            <button className="addMemberButton" onClick={() => setButtonPopup(true)}>+</button>
          </div>

          <AddMemberPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          </AddMemberPopup>

        </div>
      </div>
    );
  }
  
  export default Home;

