import {
  BackgroundImages,
  DarkOverlay,
  TextHero,
  ViewContainer,
} from "@/components/styles/Index.styled";
import React from "react";

export default function HomeScreen() {
  return (
    <ViewContainer>
      <BackgroundImages
        source={require("../../assets/images/A7R07854ⒸDamienDecaix.jpg")}
      >
        <DarkOverlay />

        <TextHero>HELLO VLA2</TextHero>
      </BackgroundImages>
    </ViewContainer>
  );
}
