import styled from "styled-components/macro";
import Alien from "../assets/img/invader.png";
import GithubSrc from "../assets/logos/github-alt.svg";
import LinkedInSrc from "../assets/logos/linkedin.svg";
import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "CV", id: "cv" },
    { name: "Tech", id: "tech" },
    { name: "Projects", id: "projects" },
    { name: "About me", id: "aboutme" },
  ];
  return (
    <NavbarWrapper>
      <a href="#outerSpace">
        <Home src={Alien} alt="Invader" />
      </a>
      <ul>
        {menuItems.map((menuItem) => (
          <React.Fragment key={menuItem.name}>
            <li>
              <a href={`#${menuItem.id}`}>{menuItem.name}</a>
            </li>
            <span>•</span>
          </React.Fragment>
        ))}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <Social src={GithubSrc} alt="Github" />
        <Social src={LinkedInSrc} alt="LinkedIn" />
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 1rem;
  min-height: 70px;
  background-color: var(--text-secondary);

  ::first-of-type(img) {
    height: 50px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    a {
      font-size: clamp(1rem, 6vw, 1.4rem);
      transition: var(--transition);
      text-decoration: underline 1px solid transparent;
      cursor: pointer;
      color: var(--text-primary);
    }

    a:hover {
      text-decoration: underline 1px solid gold;
      color: gold;
    }
    span {
      margin: auto 0.5rem;
    }
  }
  div {
    > * {
      margin: auto 0.5rem;
    }
  }
`;
const Social = styled.img`
  height: 35px;
`;
const Home = styled(Social)``;
export default Navbar;
