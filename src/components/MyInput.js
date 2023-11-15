import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import MyText from "./MyText";
export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <MyText >{label}</MyText>
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    fontSize: 18,
    placeholderTextColor: Colors.gray,
    placeholderTextSize: 18,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
});