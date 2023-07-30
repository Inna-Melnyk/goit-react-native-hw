import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({
  placeholder,
  placeholderTextColor,
  inputMode = "text",
  onChange,
  value,
  secureTextEntry = false,
  // isOpenKeyboard,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (isFocused) {
      return "#FF6C00";
    } else {
      return "#E8E8E8";
    }
  };

  const onImputFocus = () => {
    // isOpenKeyboard(true);
    setIsFocused(true);
  };

  const onImputBlur = () => {
    // isOpenKeyboard(false);
    setIsFocused(false);
  };
  return (
    <TextInput
      style={[{ borderColor: getBorderColor() }, styles.input]}
      onChangeText={(e) => onChange(e)}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      inputMode={inputMode}
      onFocus={() => onImputFocus()}
      onBlur={() => onImputBlur()}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
