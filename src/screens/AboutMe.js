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
          I'am Benjamin, born 1989 in Germany. I studied Social Work, but
          started working as an Macintosh IT-Consultant in 2012.
        </p>
        <p>Once a week I used to ride as a bike messenger for several years.</p>
        <p>
          In October 2020 I participated at a 3 month remote Coding Bootcampe in
          Cologne. The result out of these 3 Months (and of course the
          experience I gained before), led to an App called -=DispoDisco=-. It
          was done by @domko95 and me.
        </p>
      </TextContainer>
    </Container>
  );
};

export default AboutMe;
