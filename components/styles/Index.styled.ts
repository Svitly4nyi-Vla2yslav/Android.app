import styled from "styled-components/native";
import { ImageBackground } from "react-native";

// Контейнер для вирівнювання елементів по центру
export const ViewContainer = styled.View`
  flex: 1;   
  align-content: center;
  justify-content: center;
  
`;

// Текст із великим розміром шрифту
export const TextHero = styled.Text`
  font-size: 48px;
  color: white;
  text-align: center;
`;

// Стилізація для фонових зображень через ImageBackground
export const BackgroundImages = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  
`;
export const DarkOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
`;