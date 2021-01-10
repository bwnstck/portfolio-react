import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";

const Contact = () => {
  return (
    <Container>
      <h2>🕊 Contact</h2>
      <Card>
        <a href="mailt:benjamin@weinstock.it">Mail</a>
      </Card>
      <Card>
        <a href="mailt:benjamin@weinstock.it">Github</a>
      </Card>
      <Card>
        <a href="mailt:benjamin@weinstock.it">LinkedIn</a>
      </Card>
    </Container>
  );
};

export default Contact;
