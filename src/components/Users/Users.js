import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/userServices";
import {User} from "./User";
const Users = () => {
   const [users, setUsers] = useState([]);
   useEffect(()=>{
       userServices.getAllUsers().then(value => value.data).then(value => setUsers([...value]))
   },[]);
   return(
    <div>
        {
            users.map(val => <User user={val}/>)
        }
    </div>
   );
};

export {Users};