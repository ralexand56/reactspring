import React, { useState } from "react";
import { config, useSpring, animated } from "react-spring";
import styled from "styled-components";
import "./App.css";

const AnimatedBox = styled(animated.div)`
  font-size: 14em;
  text-transform: uppercase;
  text-shadow: 0px 5px 15px rgba(255, 255, 255, 0.5);
  border: 0.1em solid;
  margin: 1em;
  /* border-radius: 2em; */
  cursor: pointer;
`;

const App = () => {
  const [isOn, setSwitch] = useState(true);
  const props = useSpring({
    config: config.wobbly,
    // opacity: isOn ? 1 : 0,
    borderRadius: isOn ? 100 : 0,
    color: isOn ? "blue" : "red",
    from: {
      // opacity: isOn ? 0 : 1,
      color: isOn ? "red" : "blue",
      borderRadius: isOn ? 0 : 100
    }
  });

  return (
    <AnimatedBox style={props} onClick={() => setSwitch(!isOn)} className="App">
      fade in
    </AnimatedBox>
  );
};

export default App;
