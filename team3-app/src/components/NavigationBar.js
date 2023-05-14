import { Link } from "react-router-dom";

function NavigationBar(props) {
    return (
        <div className="wholeNavBar">
            <div className="team3Icon">
                <Link to="home">
                <img src=".\images\team3logo.png" className="teamLogo" alt="logo of a T with a 3" />
                </Link>
            </div>
            <div className="Nav-list">
                <ul className="navListUl">
                    <li><Link to="member1">Fiona</Link></li>
                    <li><Link to="member2">Jodie</Link></li>
                    <li><Link to="member3">Erin</Link></li>
                </ul>
            </div>  
        </div>
    );
  }
  
  export default NavigationBar;

  