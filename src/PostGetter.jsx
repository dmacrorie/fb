import { useParams } from "react-router-dom"
import Post from "./Post";

//'postId' has to be the same as the route given
// our candidatePost.id will be a number whereas postId is a string

const PostGetter = ({ posts, increaseLikes, decreaseLikes }) => {
    const { postId } = useParams();
    const results = posts.filter((candidatePost) => candidatePost.id === Number(postId))

    if (!results || results.length === 0) {
        return (
            <p>No post found with that ID</p>
        )
    }

    const post = results[0];

    return (
        <Post
            post={post}
            onLikeHandler={() => increaseLikes(post.id)}
            onDislikeHandler={() => decreaseLikes(post.id)}
        />
    )
};

export default PostGetter