import React from 'react'
import './AddMemberPopup.css' 
import { useState } from 'react';

function MyForm() {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    
    }

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
}

return (
    <form onSubmit={handleSubmit}  className="popUpForm">
                        <div className="formItems">

                            <label className="listLabel">Name: </label>
                            <input 
                                type="text"
                                name="name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="formItems">
                            <label className="listLabel">Age: </label>
                            <input 
                                type="text"
                                name="age"
                                value={inputs.age || ""}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="occu formItems">
                            <label className="listLabel">Occupation: </label>
                            <div className="occuList">
                                <input 
                                    type="text"
                                    name="occupation1"
                                    value={inputs.occupation1 || ""}
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text"
                                    name="occupation2"
                                    value={inputs.occupation2 || ""}
                                    onChange={handleChange}
                                />
                                <input type="text"
                                    name="occupation3"
                                    value={inputs.occupation3 || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        <div className="hobbies formItems">
                            <label className="listLabel">Hobbies: </label>

                            <div className="hobbyList">
                                <input 
                                    type="text"
                                    name="hobbies1"
                                    value={inputs.hobbies1 || ""}
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text"
                                    name="hobbies2"
                                    value={inputs.hobbies2 || ""}
                                    onChange={handleChange}
                                />
                                <input 
                                    type="text"
                                    name="hobbies3"
                                    value={inputs.hobbies3 || ""}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        <button className="submitButton" type="submit" >Submit</button>

                    </form>
)
}









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
                    <MyForm />
            </div>
            </div>

        </div>
    ) : "";
}

export default AddMemberPopup