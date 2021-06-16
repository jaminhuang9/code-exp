import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { keyframes, stagger } from "popmotion";
import { render } from "react-dom";
import { MaterialIcons } from "@expo/vector-icons";
import { Constants } from "expo";

//number of circles
const COUNT = 5;
//duration of effect
const DURATION = 4000;
//first animation
const initialPhase = { scale: 0, opacity: 1 };
//array for animations
const constructAnimations = () =>
  [...Array(COUNT).keys()].map(() => initialPhase);

export default class App extends React.Component {
  state = {
    animations: constructAnimations(),
  };

  componentDidMount() {
    this.animateCircles();
  }

  animateCircles = () => {
    const actions = Array(COUNT).fill(
      keyframes({
        values: [initialPhase, { scale: 2, opacity: 0 }],
        duration: DURATION,
        loop: 1,
        yoyo: 0,
      })
    );

    stagger(actions, DURATION / COUNT).start((animations) => {
      this.setState({ animations });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.animations.map(({ opacity, scale }, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle,
                {
                  transform: [{ scale }],
                  opacity,
                },
              ]}
            />
          );
        })}
        <View style={styles.midCircle}>
          <MaterialIcons name="emoji-people" style={styles.icon} />
          <Text style={styles.text}> Searching... </Text>
        </View>
      </View>
    );
  }
}

const getCircle = (radius, backgroundColor = "blue") => ({
  backgroundColor,
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  position: "absolute",
});

const styles = StyleSheet.create({
  circle: getCircle(100),
  midCircle: {
    ...getCircle(75),
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    fontSize: 42,
    marginBottom: 5,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
