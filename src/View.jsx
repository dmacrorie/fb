import './App';
import Post from './Post';


const View = (props) => {

    const getPosts = () => {

        return props.posts.map((post) => (
            <>
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    likes={post.likes}
                />
                <button className="likeButton" onClick={() => props.increaseLikes(post.id)}>Like</button>
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
