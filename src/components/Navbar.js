import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return ( <Container>
        <h1>Navbar</h1>;
    </Container> 
    )
};

const Container = styled.div`
width: 100vw;
height: 50px;
background-color: red;

display: flex;
justify-content: center;
align-items: center;
`;

export default Navbar;