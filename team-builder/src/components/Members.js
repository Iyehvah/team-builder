import React from "react";

const Members = props => {
console.log('dis props', props);

    return (
        <div>
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Members;