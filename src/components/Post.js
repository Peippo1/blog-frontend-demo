import React from 'react';
import styled from 'styled-components';
import moment from "moment";
import userEvent from '@testing-library/user-event';

const Post = ({ post, user }) => {
    return ( 
    <Container>
        <h1>{post.title}</h1>
        <p>{post.cotent}</p>
        <p>Written by {user.name}</p>
        {/* formatting date of post */}
        <p>{moment.utc(post.createdAt).fromNow()}</p>

    </Container> 
    );
};

const Container = styled.div`
height :200px;
width: 250px;
border: 2px black;
margin: 3px;
`;


export default Post;