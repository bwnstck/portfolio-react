import styled from "styled-components/macro";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        made with <span>♥️</span> by bwnstk
      </p>
      <p>
        Found an error? Open an{" "}
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
  p {
    font-size: 0.9rem;
  }
  span {
    transition: var(--transition);
    display: inline-block;
    :hover {
      transform: scale(1.5);
    }
  }
  &&:last-child {
    margin-bottom: 0.7rem;
  }
`;

export default Footer;
