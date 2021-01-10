import styled from "styled-components/macro";
import Alien from "../assets/img/invader.png";
import GithubSrc from "../assets/logos/github-alt.svg";
import LinkedInSrc from "../assets/logos/linkedin.svg";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Home src={Alien} alt="Invader" />
      <ul>
        <li>CV</li>
        <li>Tech</li>
        <li>Projects</li>
        <li>About me</li>
        <li>Contact</li>
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
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
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
    li {
      transition: hover 1s ease-in-out;
      margin-right: 1rem;
    }
    li:hover {
      border-bottom: 1px solid gold;
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
