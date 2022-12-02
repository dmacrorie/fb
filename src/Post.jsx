import { Link } from 'react-router-dom';
import './Post.css';



const Post = ({post}) => {

    return (
        <Link to={`/posts/${post._id}`}>
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.likes}</p>
        </div>
        </Link>
    );
}

export default Post;