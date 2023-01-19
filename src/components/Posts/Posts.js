import {Post} from "./Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(val => <Post post={val}/>)}
        </div>
    );
};

export {Posts};