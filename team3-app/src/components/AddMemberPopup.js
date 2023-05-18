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
                            <label className="listLabel">Name: </label>
                            <input type="text"/>
                        </div>
                        
                        <div className="formItems">
                            <label className="listLabel">Age: </label>
                            <input type="text"/>
                        </div>
                        
                        <div className="occu formItems">
                            <label className="listLabel">Occupation: </label>
                            <div className="occuList">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                        </div>
                        
                        <div className="hobbies formItems">
                            <label className="listLabel">Hobbies: </label>
                            <div className="hobbyList">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                        </div>
                        <button className="submitButton" type="submit">Submit</button>
                    </form>
            </div>
            </div>

        </div>
    ) : "";
}

export default AddMemberPopup