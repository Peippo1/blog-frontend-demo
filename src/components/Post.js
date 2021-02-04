import React from 'react'
import styled from 'styled-components'

const Post = () => {
    return ( <Container>
        <h1>Post</h1>;
    </Container> 
    )
};

const Container = styled.div`
height :200px;
width: 250px;
border: 2px black;
margin: 3px;
`;


export default Post;