import { findByLabelText } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const App = () => {
  return (
    <Container>
      <Navbar />
      <div>My Blog</div>
      <PostContainer>
        <Post />
        <Post />
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
