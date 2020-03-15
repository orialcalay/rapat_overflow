import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './Users.css';

export default function Users(){
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
                .then(function (response) {
                    setUsers(response.data)
                });
    }, []);

    const usersCard = users.map((user, i) =>
        <div className="user-card" key={i}><UserCard name={user.first_name}/></div>);

    return(
        <div>
            <div className="user-cards">
                {usersCard}
            </div>
        </div>
    );
}