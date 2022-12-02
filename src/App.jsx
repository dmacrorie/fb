import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Post from './Post';
import { useEffect, useState } from "react";
import './AddPost';
import AddPost from './AddPost';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './View'
import View from './View';
import Container from 'react-bootstrap/Container';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';
import PostGetter from './PostGetter';
import axios from 'axios';

function App() {

  const [posts, changePosts] = useState([]);

  const navigate = useNavigate();

  const updatePosts = (title, content) => {
    const newPost = {title: title, content: content}
    axios.post('http://localhost:3001/posts/create', newPost)
    .then(({ data }) => {
      console.log(data)
      if (data.result) {
        toastr["success"]('Post added');
        navigate('/posts');
        getPosts();
      }
    })
    .catch((error) => {
      console.log(error)
      toastr['error']('something went wrong')
    })
  }

  const deletePosts = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
    .then(() => {
      toastr["success"]("post deleted");
      getPosts();
    })
  }

  // INCREASING LIKES FOR THE CORRECT POST BY MAPPING THROUGH AND INCREASING THE LIKES FOR THE CORRECT ID 
  
  const increaseLikes = (id) => {
    
  }

  const decreaseLikes = (id) => {

    
  }

  const addPost = (newPost) => {
    //pass in title and content or the whole post
  
  }

const getPosts = () => {
  axios.get('http://localhost:3001/posts')
    .then(({ data }) => changePosts(data))
}



//if you add 'posts' to the second empty array then 

  useEffect(() => {
    getPosts();
  }, [])



  //MAPPING THROUGH THE ARRAY OF POSTS AND RETURNING EACH + A FORM BELOW TO ADD ANOTHER POST

  return (
    <Container>

      <Navbar bg="light" expand="md">
        <Navbar.Brand>FB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className='mr-auto'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/posts'>View posts</Link>
          <Link className='nav-link' to='/add'>Add</Link>
        </Nav>
        <Navbar.Collapse />
      </Navbar>

      <Routes>

        <Route path="/" element={
          <View posts={posts} increaseLikes={increaseLikes} />
        } 
        />
        <Route path="/posts" element={
          <View 
            posts={posts} 
            increaseLikes={increaseLikes}
            decreaseLikes={decreaseLikes} 
            deletePosts={deletePosts}
          />
        } 
        />
        <Route path="/add" element={
          <AddPost 
            addPost={addPost}
            getPosts={getPosts}
            onSubmit={(title, content) => updatePosts(title, content)}
          />
        } />
        <Route path="/edit/:id" element={
          <AddPost onSubmit={(title, content) => updatePosts(title, content)} edit 
          getPosts={getPosts}/>
        }
        />
        <Route path="/posts/:id" element={
          <Post 
          />
        } />

      </Routes>

    </Container>
  );
}

export default App;




//decide what only users can do 
//place middleware between end points they can reach (in your router)
//if everythings correct give them a token