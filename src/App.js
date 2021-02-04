import React, {useEffect, useState} from "react";
import Cors from 'cors';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { fetchPosts, fetchUsers } from "./utils/";




const App = () => {
const [posts, setPosts] = useState([])
const [users, setUsers] = useState([])

// function and dependenct array
useEffect(() => { 
  fetchUsers(setUsers);
  fetchPosts(setPosts);
}, []);

useEffect(() => {
  const getAllPosts = async () => {
    const response = await fetch(`http://localhost:5000/posts/${users[]._id}`);
    const data = await response.json();
    setPosts(data);
  };
  getPostbyUser(); 
}, []);

  return (
    <Container>
      <Navbar />
      <div>My Blog</div>
      {/* below to render new objects in the array */}
      <PostContainer>
        {posts.map((post ,index) => {
          return <Post post={post} user={users[]}/>;
        })}
      </PostContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: limegreen;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 100vw;
  flex-wrap: wrap;
`;

export default App;
