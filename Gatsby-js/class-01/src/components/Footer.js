import React from 'react'
import styled from "styled-components";

const Footer = () => {
    return (
        <div>
            <Container>

           <h1>Footer</h1> 
            </Container>
        </div>
    )
}

export default Footer;

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
`
