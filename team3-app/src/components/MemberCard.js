import PropTypes from 'prop-types';
import './MemberCard.css';



function MemberCard({ name, age, picture }) {
    return(
        <div className="memberCard">
            <h2>{name}</h2>
            <h4>Age: {age}</h4>
            
            <img src={picture} className="cardPicture" alt="team member" />
           
        </div>
    )
}

MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.any.isRequired,
}

export default MemberCard;