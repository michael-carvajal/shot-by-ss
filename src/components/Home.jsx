// src/components/Home.js
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 20px;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to the Photographer's Portfolio</Title>
      <Introduction>
        Explore the beauty captured through the lens. Our portfolio showcases
        moments, emotions, and stories frozen in time. Every photograph has a
        unique tale to tell. Let the images speak for themselves.
      </Introduction>
      {/* Add more content specific to the Home section */}
    </Container>
  );
};

export default Home;
