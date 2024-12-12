import React from "react";
import { Ninja } from "../assets/emojis";
import Container, { TextContainer } from "../components/Container";
import HeaderImg from "../components/HeaderImg";

const AboutMe = () => {
  return (
    <Container primary id="about">
      <h2>
        {" "}
        <HeaderImg src={Ninja} alt="Ninja" /> About
      </h2>
      <TextContainer>
        <p>
          I'am Benjiiiiiii, born 1989 in Germany. In 2010, after a year in Paraguay
          I studied Social Work in Freiburg. To earn some money I started
          working as a Macintosh IT-Consultant in 2012.
        </p>
        <p>
          I also started a small business repairing mobile phones and computers
          of all kinds from friends and neighbors. After a while I also started
          programming some small static websites with{" "}
          <a
            href="https://jekyllrb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jekyll
          </a>
          .
          <p>
            Once a week I also used to ride as a bike messenger for several
            years in Freiburg.
          </p>
        </p>
        <p>
          In October 2020 I participated at a 3 month remote Coding Bootcampe in
          Cologne. The result out of these 3 Months (and of course the
          experience I gained before), led to an App called -=DispoDisco=-. It
          was done in collaboration with{" "}
          <a
            href="https://github.com/domko95"
            target="_blank"
            rel="noopener noreferrer"
          >
            @domko95
          </a>
          .
        </p>
        <p>
          At the moment I'm in Cologne working with the best colleagues, at{" "}
          <a
            href="https://ambient.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ambient Digital
          </a>{" "}
          :)
        </p>
      </TextContainer>
    </Container>
  );
};

export default AboutMe;
