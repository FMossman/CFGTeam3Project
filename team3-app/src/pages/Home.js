import React from 'react';
import Member from '../components/MemberCard';
import AddMemberPopup from '../components/AddMemberPopup';
import { useState } from 'react';


const memberArray = [
{name:"Fiona", age:"39", page: "./Member1", background: "Worked in film and television before becoming a primary school teacher and is now wanting to switch careers."},
{name:"Jodi", age:"??", page: "./Member2", background: "???????"},
{name:"Erin", age:"??", page: "./Member3", background: "???????"}
];


  let memberList=[];

  memberArray.forEach((member,index)=>{
    memberList.push(
      <a key={index} href={member.page}>
      <Member key={index} name= {member.name} age= {member.age} />
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

