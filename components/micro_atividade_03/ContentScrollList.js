import React from "react";
import { Image, ScrollView, Text } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const ContentScrollList = () => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
      {Array.from({ length: 5 }).map((_, i) => (
        <Image key={`1-${i}`} source={logo} />
      ))}

      <Text style={{ fontSize: 96 }}>If you like</Text>
      {Array.from({ length: 5 }).map((_, i) => (
        <Image key={`2-${i}`} source={logo} />
      ))}

      <Text style={{ fontSize: 96 }}>Scrolling down</Text>
      {Array.from({ length: 5 }).map((_, i) => (
        <Image key={`3-${i}`} source={logo} />
      ))}

      <Text style={{ fontSize: 96 }}>What's the best</Text>
      {Array.from({ length: 5 }).map((_, i) => (
        <Image key={`4-${i}`} source={logo} />
      ))}

      <Text style={{ fontSize: 80 }}>React Native</Text>
    </ScrollView>
  );
};

export default ContentScrollList;
