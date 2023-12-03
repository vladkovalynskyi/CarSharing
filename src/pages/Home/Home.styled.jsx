import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import backgroundImg from '../../img/Car.png';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image:linear-gradient(rgba(46, 47, 66, 0.7),
    rgba(46, 47, 66, 0.7) 100%), url(${backgroundImg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const Text = styled.p`
    display: flex;
    font-size: 64px;
    font-style: normal;
    font-weight: 900;
    color: #f0f3f6;
    text-align: center;
    width: 760px;
    margin-top: 180px;
    margin-left:auto;
    margin-right:auto;
`;

export const Button = styled(Link)`
    display: flex;
    width: 140px;
    height: 2px;
    padding: 24px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #3470ff;
    color: #fff;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.42;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    &:hover {
    background-color: #0b44cd;
  }
`;