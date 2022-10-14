
import './Post.css';



const Post = ({post, increaseLikes, decreaseLikes}) => {

    return (
        <Link to={`/view/$(post.id)`}>
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.likes}</p>
            <button onClick={increaseLikes}>Like</button>
            <button onClick={decreaseLikes}>Unlike</button>
        </div>
        </Link>
    );
}

export default Post;