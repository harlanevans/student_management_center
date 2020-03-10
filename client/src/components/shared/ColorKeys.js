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
        <VeryBad>Bad</VeryBad>
        <Bad>Below Average</Bad>
        <Average>Average</Average>
        <Good>Good</Good>
        <VeryGood>Very Good</VeryGood>
      </Row>
    </div>
  );
};

export default ColorKeys;

const styles = {
  padding: {
    padding: "1em 1em",
    border: "solid .5px gray",
    borderRadius: '5px',
    boxShadow: ".5px .5px 1px 1px #dcdcdd",
    width: '50%'
  },
  keyColors: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: 'space-between',
  }
};

