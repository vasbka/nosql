import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/faculty">Faculty</Link>
        </li>
        <li>
          <Link to="/subject">Subject</Link>
        </li>
        <li>
          <Link to="/Statement">Statement</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default Header;
