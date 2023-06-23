import React, { useRef, useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import LottieAnimation, { AnimationObject } from "lottie-react-native";

interface LottieLoaderProps {
  source?: string | AnimationObject | { uri: string };
  style?: StyleProp<ViewStyle>;
  speed?: number;
  loop?: boolean;
  visible?: boolean;
}

export const LottieLoader = ({
  source = require("../loader/defaultLoader.json"),
  style,
  speed = 1,
  loop = false,
  visible = true,
}: LottieLoaderProps) => {
  const animation = useRef<LottieAnimation>(null);

  useEffect(() => {
    animation.current?.play();
  }, [source, loop, visible]);

  if (!visible) return null;

  return (
    <LottieAnimation
      ref={animation}
      source={source}
      loop={loop}
      speed={speed}
      style={style}
    />
  );
};
