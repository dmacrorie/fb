import { Button } from "react-bootstrap";
import "./App";
import Post from "./Post";

const View = ({ increaseLikes, decreaseLikes, deletePosts, posts }) => {


  return (
    <>
    {posts.map((post) => (
      <div key={post._id}>
        <Post post={post} ></Post>
        <Button className="likeButton" onClick={() => increaseLikes(post._id)}>
        Like
      </Button>
      <Button
        className="dislikeButton"
        onClick={() => decreaseLikes(post._id)}
      >
        Dislike
      </Button>
      <Button className="deleteButton" onClick={() => deletePosts(posts._id)}>
        Dislike
      </Button>
      </div>
    ))}
    </>
  )
}

export default View;

