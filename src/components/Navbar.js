import React, { useEffect } from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/ViewList";

import styled from "styled-components/macro";
import Alien from "../assets/img/invader.png";
import GithubSrc from "../assets/logos/github-alt.svg";
import LinkedInSrc from "../assets/logos/linkedin.svg";
import { useState } from "react";
import { isMobile } from "../screens/lib/responsiveHelpers";

const menuItems = [
  { name: "CV", id: "cv" },
  { name: "Tech", id: "tech" },
  { name: "Projects", id: "projects" },
  { name: "About me", id: "aboutme" },
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
    <NavbarWrapper>
      <a
        href="#outerSpace"
        onClick={() => {
          handleActive(null);
        }}
      >
        <Home src={Alien} alt="Invader" />
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
                    {menuItem.name}
                  </StyledLink>
                </li>
                <span>•</span>
              </React.Fragment>
            ))}
            <StyledLink
              selected={active === menuItems[-1]}
              href="#contact"
              onClick={() => {
                handleActive(menuItems[-1]);
              }}
            >
              Contact
            </StyledLink>
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
                  maxHeight: ITEM_HEIGHT * menuItems.length,
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
                    {menuItem.name}
                  </StyledLink>
                </MenuItem>
              ))}
              <MenuItem>
                <StyledLink
                  toggleMenu={!showMenu}
                  selected={active === menuItems[-1]}
                  href="#contact"
                  onClick={() => {
                    handleActive(menuItems[-1]);
                  }}
                >
                  Contact
                </StyledLink>
              </MenuItem>
            </Menu>
          </PopupMenu>
        )}
      </ul>
      <div>
        <Social src={GithubSrc} alt="Github" />
        <Social src={LinkedInSrc} alt="LinkedIn" />
      </div>
    </NavbarWrapper>
  );
};
const PopupMenu = styled.div`
  button {
    font-size: 2rem;
    /* padding: 0.1rem 0.5rem; */
    color: white;
    svg {
      font-size: 2.25rem;
    }
  }
`;
const StyledLink = styled.a`
  margin: auto;
  font-size: clamp(1rem, 6vw, 1.4rem);
  transition: var(--transition);
  cursor: pointer;
  text-decoration: ${(props) =>
    props.selected
      ? "underline 1px solid gold"
      : "underline 1px solid transparent "};

  color: ${(props) => (props.selected ? "gold" : "var(--text-primary)")};

  :hover {
    text-decoration: underline 1px solid gold;
    color: gold;
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
