import React, { useState } from "react";

const MemberForm = props => {
    const [members, setMembers] = useState({
        name: "",
        email: "",
        roll: ""
    });
    
    const handleChanges = event => {
        setMembers({...members, [event.target.name]: event.target.value });
    };
    const submitHandler = event => {
        event.preventDefault();
        const newMember = {
            ...members,
            id: Date.now()
        }
        props.addNewMember(newMember);
        setMembers({ name: "", email: "", role: "" });
    };

    return(
        <div className="AddingMember">
            
            <form onSubmit={submitHandler}>
               
                <label htmlFor="name">Member Name</label>
                <input 
                onChange={handleChanges}
                id="name"
                type="text"
                name="name"
                value={members.name}
                />

               
                <label htmlFor="email">Member Email</label>
                <input
                onChange={handleChanges}
                id="email"
                type="text"
                name="email"
                value={members.email} 
                />

                
                <label htmlFor="role">Members Role</label>
                <input 
                onChange={handleChanges}
                id="role"
                type="text"
                name="role"
                value={members.role} 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default MemberForm;

