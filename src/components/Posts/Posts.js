import {Post} from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div className={'posts_div'}>
            {posts.map(val => <Post post={val}/>)}
        </div>
    );
};

export {Posts};