import React from "react";
import { Row, Paragraph } from "../../styles/Global";
import { VeryBad, Bad, Average, Good, VeryGood } from "../../styles/ColorsKeys";

const ColorKeys = () => {
  return (
    <div style={styles.padding}>
      <Paragraph
        style={{
          justifyContent: "center",
          paddingBottom: ".5em",
          textDecoration: "bold"
        }}
      >
        Keys
      </Paragraph>
      <Row style={styles.keyColors}>
        <VeryBad>Very Bad</VeryBad>
        <Bad>Bad</Bad>
        <Average>Average</Average>
        <Good>Good</Good>
        <VeryGood>Very Good</VeryGood>
      </Row>
    </div>
  );
};

export default ColorKeys;

const styles = {
  container: {
    padding: "2em"
  },
  padding: {
    padding: "1em 0em"
  },
  
  keyColors: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between'

  }
};

