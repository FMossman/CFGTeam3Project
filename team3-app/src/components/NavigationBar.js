import { Link } from "react-router-dom";


function NavigationBar() {
    return (
        <div className="wholeNavBar">
            <div className="team3Icon">
                <img src=".\images\team3logo.png" className="teamLogo" alt="logo of a T with a 3" />
            </div>
            <div className="Nav-list">
                <ul className="navListUl">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="member1">Member 1</Link></li>
                    <li><Link to="member2">Member 2</Link></li>
                </ul>
            </div>  
        </div>
    );
  }
  
  export default NavigationBar;