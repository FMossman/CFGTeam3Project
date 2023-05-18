import PropTypes from 'prop-types';
import './MemberCard.css';



function MemberCard({ name, picture }) {
    return(
        <div className="memberCard">
            <h2>{name}</h2>
            
            <img src={picture} className="cardPicture animate" alt="team member" />
           
        </div>
    )
}

MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default MemberCard;