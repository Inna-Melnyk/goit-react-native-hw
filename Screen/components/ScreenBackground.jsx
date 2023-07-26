import {
  ImageBackground,
  StyleSheet,
  
} from "react-native";

export const ScreenBackground = ({children}) => {
  const image = require("../../images/background.jpg");

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
