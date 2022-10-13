// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Post from './Post';
import { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './AddPost';
import AddPost from './AddPost';

function App() {

  const initialPosts = [
    {
      id: 0,
      title: '',
      content: '',
      likes: 0,
    },
  ];


  /* -------------------------------------------------------------------------- */
  /*                              INCREASING LIKES                              */
  /* -------------------------------------------------------------------------- */


  const [posts, setPosts] = useState(initialPosts);

  const updatedPosts = (title, content,) => {
    const item = { 
      id: posts.length, 
      title, 
      content, 
      likes:0,
     };
    setPosts((state) => [...state, item])
  }

  const increaseLikes = (id) => {
    const updatedPosts = posts.map((post) => {

      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  }



  /* -------------------------------------------------------------------------- */
  /*                                  RETURNING                                 */
  /* -------------------------------------------------------------------------- */

  return (
    <>
      {posts.map((post) => (
        <>
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            likes={post.likes}
          />
          <button className="likeButton" onClick={() => increaseLikes(post.id)}>Like</button>
        </>
      ))}          
      <AddPost onSubmit={(title, content) =>
        updatedPosts(title, content)} />
    </>
  );
}

export default App;
