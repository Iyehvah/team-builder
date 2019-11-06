import React, {useState} from 'react';
import './App.css';
import MemberForm from "./components/MemberForm";

function App() {
    const [members, setMembers] = useState([{
        name: "",
        email: "",
        role: ""
    }
]);


    const addNewMember = member => {
        const newMember = {
            name: member.name,
            email: member.email,
            role: member.role
        };
        setMembers([...members, newMember]);
      };


    return (
        <div className="App">
            <MemberForm addNewMember={addNewMember}/>
        </div>
    )
}

export default App;
