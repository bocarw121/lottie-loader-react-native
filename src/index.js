import React, { useRef, useEffect } from "react";
import { StyleSheet, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import LottieAnimation from "lottie-react-native";

export const LottieLoader = ({
  visible,
  source,
  animationStyle,
  speed,
  loop,
}) => {
  const animation = useRef();

  useEffect(() => {
    if (animation.current && visible && loop) {
      animation.current.play();
    }
  }, [visible, source, loop]);

  if (visible)
    return (
      <LottieAnimation
        ref={animation}
        source={source}
        loop={loop}
        speed={speed}
        style={[styles.animationStyle, animationStyle]}
      />
    );
  else return null;
};

const styles = StyleSheet.create({
  animationStyle: {
    height: "100%",
    width: "100%",
  },
});

LottieLoader.defaultProps = {
  visible: false,
  source: require("./defaultLoader.json"),
  animationStyle: {},
  speed: 1,
  loop: true,
};

LottieLoader.propTypes = {
  visible: PropTypes.bool,
  source: PropTypes.object,
  animationStyle: ViewPropTypes.style,
  speed: PropTypes.number,
  loop: PropTypes.bool,
};
