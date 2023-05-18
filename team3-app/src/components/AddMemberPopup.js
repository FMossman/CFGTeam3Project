import React from 'react'
import './AddMemberPopup.css' 

function AddMemberPopup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="addMemberButton" onClick={() => props.setTrigger(false)}
                >x</button>
                { props.children }
                <div className="popUpFormContainer">
                    <h3>New Nember Details</h3>
                    <br></br>
                    <form className="popUpForm">
                        <label>Name: </label>
                        <input type="text"/>
                        <label>Age: </label>
                        <input type="text"/>
                        <textarea>Background information: </textarea>
                        <button type="submit">Submit</button>
                    </form>
            </div>
            </div>

        </div>
    ) : "";
}

export default AddMemberPopup