import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenicationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account {
    margin-bottom: 20px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;
const AuthenicationPage = ({ children }) => {
  return (
    <AuthenicationPageStyles>
      <div className="container">
        <div className="text-center">
          <NavLink to="/" className="inline-block">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
          </NavLink>
        </div>
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenicationPageStyles>
  );
};

export default AuthenicationPage;
