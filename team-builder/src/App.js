import React, {useState} from 'react';
import './App.css';
import MemberForm from "./components/MemberForm";
import Members from "./components/Members";

function App() {
    const [members, setMembers] = useState([{
        id: 1,
        name: "",
        email: "",
        role: ""
    }
]);
    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            name: member.name,
            email: member.email,
            role: member.role
        };
        setMembers([...members, newMember]);
      };


    return (
        <div className="App">
            <h1>Add A Team Member!</h1>
            <MemberForm addNewMember={addNewMember}/>
            <Members members={members}/>
        </div>
    )
}

export default App;
