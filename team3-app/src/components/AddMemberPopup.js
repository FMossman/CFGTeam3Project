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
                    <h3>New Member Details</h3>
                    <br></br>
                    <form className="popUpForm">
                        <div className="formItems">
                            <label>Name: </label>
                            <input type="text"/>
                        </div>
                        <div className="formItems">
                            <label>Age: </label>
                            <input type="text"/>
                        </div>
                        <div className="formItems">
                            <label>Occupation: </label>
                            <input type="text"/>
                        </div>
                        <div className="hobbies formItems">
                            <label>Hobbies: </label>
                            <div className="hobbyList">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
            </div>
            </div>

        </div>
    ) : "";
}

export default AddMemberPopup