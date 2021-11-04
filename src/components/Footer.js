import styled from "styled-components/macro";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        made with <span>♥️</span> by{" "}
        <a href="https://github.com/bwnstk" target="_blank" rel="noreferrer">
          bwnstk
        </a>
      </p>
      <p>
        Found a mistake? Open an{" "}
        <a
          href="https://github.com/bwnstck/portfolio-react/issues"
          target="_blank"
          rel="noreferrer"
        >
          Issue!
        </a>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 1rem;
  text-align: center;
  height: 70px;
  > :first-child > a {
    color: white;
    text-decoration: none;
  }
  p {
    font-size: 0.9rem;
  }
  span {
    transition: var(--transition);
    display: inline-block;
    :hover {
      transform: scale(2) rotate(22deg);
    }
  }
  &&:last-child {
    margin-bottom: 0.7rem;
  }
`;

export default Footer;
