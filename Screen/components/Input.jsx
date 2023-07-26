import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export const Input = ({ placeholder, placeholderTextColor, inputMode='text' }) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (isFocused) {
      return "#FF6C00";
    } else {
      return "#E8E8E8";
    }
  };

  const onImputFocus = () => {
    setIsFocused(true);
  };

  const onImputBlur = () => {
    setIsFocused(false);
  };
  return (
      <TextInput
        style={[{ borderColor: getBorderColor() }, styles.input]}
        // onChangeText={(text) => setEmail(text)}
        // value={email}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        inputMode={inputMode}
        onFocus={() => onImputFocus()}
        onBlur={() => onImputBlur()}
      />
    //    <TextInput
    //     style={styles.input}
    //     // onChangeText={(text) => setPassword(text)}
    //     // value={password}
    //     placeholder="Пароль"
    //     placeholderTextColor="#BDBDBD"
    //     onFocus={() => onImputFocus()}
    //     onBlur={() => onImputBlur()}
    //   /> 

  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,

    marginTop: 5,
  },
  input: {
    marginBottom: 15,
    height: 46,
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#000",
  },
});
