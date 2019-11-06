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

    return(
        <div>
            <h1>{members.name}</h1>
            <form>
                <label htmlFor="title">Title Here</label>
                <textArea></textArea>
            </form>
        </div>
    )
};

export default MemberForm;

