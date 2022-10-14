import './App';
import Post from './Post';


const View = ({posts, increaseLikes, decreaseLikes}) => {

    const getPosts = () => {

        return posts.map(() => (
            <>
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    likes={post.likes}
                />
                <button className="likeButton" onClick={increaseLikes(post.id)}>Like</button>
                <button className="dislikeButton" onClick={decreaseLikes(post.id)}>Dislike</button>
            </>
        ))
    }
    return (
        <>
            {getPosts()}
        </>
    )

}

export default View;
