import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Post from './Post';
import { useEffect, useState } from "react";
import './AddPost';
import AddPost from './AddPost';
import { Route, Routes, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './View'
import View from './View';
import Container from 'react-bootstrap/Container';
import toastr from "toastr";
import 'toastr/build/toastr.min.css';

function App() {

  // INITIAL POST

  const initialPosts = [
    {
      id: 0,
      title: '',
      content: '',
      likes: 0,
    },
  ];



  // TAKING THE ORIGINAL ARRAY AND MAKING AN UPDATED ONE WITH NEW ONE AT THE END

  const [posts, setPosts] = useState(initialPosts);

  const updatedPosts = (title, content) => {
    const item = {
      id: posts.length,
      title,
      content,
      likes: 0,
    };
    localStorage.setItem("list", JSON.stringify([...posts, item]))
    //SPREADING ORIGINAL ARRAY AND ADDING THE NEW POST TO THE END

    setPosts((state) => [...state, item])
  }

  useEffect(() => {
    const listContents = localStorage.getItem("list");
    setPosts(JSON.parse(listContents) || [])
  }, [])

  // INCREASING LIKES FOR THE CORRECT POST BY MAPPING THROUGH AND INCREASING THE LIKES FOR THE CORRECT ID 

  const increaseLikes = (id) => {
    const updatedPosts = posts.map((post) => {

      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  }


  //MAPPING THROUGH THE ARRAY OF POSTS AND RETURNING EACH + A FORM BELOW TO ADD ANOTHER POST

  return (
    <Container>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>FB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className='mr-auto'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/view'>View</Link>
          <Link className='nav-link' to='/add'>Add</Link>
        </Nav>
        <Navbar.Collapse />
      </Navbar>
      <Routes>

        <Route path="/" element={
          <View posts={posts} increaseLikes={increaseLikes} />
        } />

        <Route path="/view" element={
          <View posts={posts} increaseLikes={increaseLikes} />
        } />

        <Route path="/add" element={
          <AddPost onSubmit={(title, content) =>
            updatedPosts(title, content)} />
        } />

      </Routes>
    </Container>
  );
}

export default App;




