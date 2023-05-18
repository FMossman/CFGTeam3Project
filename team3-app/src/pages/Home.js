import React from 'react';
import Member from '../components/MemberCard';
import AddMemberPopup from '../components/AddMemberPopup';
import { useState } from 'react';


const memberArray = [
{name:"Fiona", age:"39", page: "./Member1", picture: ".\\images\\fionamossman.jpg", hobbies:"", occupation:""},
{name:"Jodie", age:"??", page: "./Member2", picture: "\\images\\JodieHols.png", hobbies:"", occupation:""},
{name:"Erin", age:"24", page: "./Member3", picture: ".\\images\\Erin.jpg", hobbies:"Renovating my car, Hiking with the dogs, spending time at the beach", occupation:"Offender Employability Mentor, Dog-sitter, Waitress"}
];


  let memberList=[];

  memberArray.forEach((member,index)=>{
    memberList.push(
      <a key={index} href={member.page}>
      <Member key={index} name= {member.name} age= {member.age} picture= {member.picture}/>
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

