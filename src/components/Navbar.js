import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/ViewList";

import styled from "styled-components/macro";
import GithubSrc from "../assets/logos/github-alt.svg";
import NeueFische from "../assets/logos/neueFische.svg";
import LinkedInSrc from "../assets/logos/linkedin.svg";
import { useState } from "react";
import { isMobile } from "../screens/lib/responsiveHelpers";
import {
  Computer,
  Dove,
  Joystick,
  Ninja,
  Superhero,
  Invader,
} from "../assets/emojis";

const menuItems = [
  { name: "CV", id: "cv", img: Superhero },
  { name: "Tech", id: "tech", img: Computer },
  { name: "Projects", id: "projects", img: Joystick },
  { name: "About", id: "about", img: Ninja },
  { name: "Contact", id: "contact", img: Dove },
];
const ITEM_HEIGHT = 48;

const Navbar = ({ active, handleActive }) => {
  const [showMenu, setShowMenu] = useState(!isMobile());
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  window.addEventListener("resize", function () {
    if (isMobile()) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarWrapper mobile={!showMenu}>
      <a
        href="#outerSpace"
        onClick={() => {
          handleActive(null);
        }}
      >
        <Home src={Invader} alt="Invader" />
      </a>
      <ul>
        {showMenu ? (
          <>
            {menuItems.map((menuItem) => (
              <React.Fragment key={menuItem.name}>
                <li>
                  <StyledLink
                    selected={active === menuItem}
                    href={`#${menuItem.id}`}
                    onClick={() => {
                      handleActive(menuItem);
                    }}
                  >
                    <img src={menuItem.img} alt={menuItem.name} />
                    {menuItem.name}
                  </StyledLink>
                </li>
                <span>::</span>
              </React.Fragment>
            ))}
          </>
        ) : (
          <PopupMenu>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 6,
                  width: "50ch",
                  margin: "60px auto auto",
                  background: "var(--text-secondary)",
                },
              }}
            >
              {menuItems.map((menuItem) => (
                <MenuItem key={menuItem.name}>
                  <StyledLink
                    toggleMenu={!showMenu}
                    selected={active === menuItem}
                    href={`#${menuItem.id}`}
                    onClick={(event) => {
                      handleClose(event);
                      handleActive(menuItem);
                    }}
                  >
                    <img src={menuItem.img} alt={menuItem.name} />{" "}
                    {menuItem.name}
                  </StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </PopupMenu>
        )}
      </ul>
      <div>
        <a href="https://github.com/bwnstck" target="_blank" rel="noreferrer">
          <Social src={GithubSrc} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/bweinstock/"
          target="_blank"
          rel="noreferrer"
        >
          <Social src={LinkedInSrc} alt="LinkedIn" />
        </a>
        <a
          href="https://talents.neuefische.com/student/bb798f02-f7b7-402a-beaf-c15f1e5cfd80"
          target="_blank"
          rel="noreferrer"
        >
          <Social src={NeueFische} alt="neue Fische Portfolio" />
        </a>
      </div>
    </NavbarWrapper>
  );
};
const PopupMenu = styled.div`
  button {
    font-size: 2rem;
    color: white;
    svg {
      font-size: 2.25rem;
    }
  }
`;
const StyledLink = styled.a`
  margin: auto;
  font-size: clamp(0.8rem, 6vw, 1.4rem);
  transition: var(--transition);
  cursor: pointer;
  text-decoration: none;

  color: ${(props) => (props.selected ? "gold" : "var(--text-primary)")};

  :hover {
    border-bottom: 2px solid gold;
    padding-bottom: 0.3rem;
    color: gold;
  }
  img {
    height: 20px;
    height: clamp(0.8rem, 6vw, 1.4rem);
  }
`;
const NavbarWrapper = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  align-items: center;
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
    > :last-child {
      display: ${(props) => (props.mobile ? "block" : "none")};
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
  height: 25px;
  transition: var(--transition);
  :hover {
    filter: drop-shadow(0 0 2px gold);
    transform: scale(1.1);
  }
`;

const Home = styled(Social)``;

export default Navbar;
