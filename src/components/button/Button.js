import { LoadingSpinner } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: white;
  font-size: 18px;
  font-weight: 600;
  height: ${(props) => props.height || "66px"};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: white;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  border-radius: 8px;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
/**
 * @param {*} onCLick Handler onClick
 *@requires
 * @param {string} type Type of button 'button' | 'submit'
 */
const Button = ({
  type = "button",
  onClick = () => {},
  children,
  kind = "primary",
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} style={{ display: "inline-block" }}>
        <ButtonStyles kind={kind} type={type} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles kind={kind} type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  kind: PropTypes.oneOf(["primary", "secondary"]),
};
export default Button;
