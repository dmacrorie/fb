import PostAttribute from "./PostAttribute";
import './Post.css';

const Post = (props) => {

    return (
        <div className="post">
            <PostAttribute label="Title" value={props.title} />
            <PostAttribute label="Content" value={props.content} />
            <PostAttribute label="Likes" value={props.likes} />
        </div>
    );
}

export default Post;