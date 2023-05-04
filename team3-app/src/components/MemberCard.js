import PropTypes from 'prop-types';


//function MemberCard for holding image/name/age/background

function MemberCard({ name, age }) {
    return(
        <div className="memberCard">
            <h2>{name}</h2>
            <h4>Age: {age}</h4>
        </div>
    )
}

MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.any.isRequired,
}

export default MemberCard;