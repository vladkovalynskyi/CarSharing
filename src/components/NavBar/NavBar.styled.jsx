import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  --tw-shadow: 0px 2px 4px rgba(0, 84, 120, 0.1);
  --tw-shadow-colored: 0px 2px 4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f3f3f2;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 100px;
`;

export const Link = styled(NavLink)`
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Manrope';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  
  &.active {
    color: #0aa1e2;
    border-bottom: 4px solid #0aa1e2;
  }



`;