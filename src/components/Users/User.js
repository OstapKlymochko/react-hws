import React, {useState} from 'react';

import {userServices} from "../../services/userServices";
import {Posts} from "./Posts";

const User = ({user}) => {
    const {id, name} = user
    const [posts, setPosts] = useState(null);
    // useEffect(() => {
    //     userServices.getAllPosts(id).then(val => val.data).then(val => setPosts([...val]));
    // }, [id])
    const handleClick = async () =>{
        const data = await userServices.getAllPosts(id).then(val=>val.data);
        setPosts([...data]);
    }
    return (
        <div>
            <h2>{id}. {name}</h2>
            {posts && <Posts posts={posts}/>}
            <button onClick={handleClick}>Get this user's posts</button>
        </div>
    );
};

export {User};