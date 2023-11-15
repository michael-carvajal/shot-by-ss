// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Typography)`
  text-decoration: none;
  color: ${({ theme, selected }) =>
    selected ? theme.palette.text.secondary : theme.palette.text.primary};
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const NavBar = ({ sections }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">Photographer's Portfolio</Typography>
        <div>
          {sections.map((section) => (
            <StyledLink
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              selected={false}
            >
              {section.label}
            </StyledLink>
          ))}
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
