import React from "react";
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
`;
const AuthenicationPage = ({ children }) => {
  return (
    <AuthenicationPageStyles>
      <div className="container">
        <img className="logo" srcSet="/logo.png 2x" alt="monkey-blogging" />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenicationPageStyles>
  );
};

export default AuthenicationPage;
