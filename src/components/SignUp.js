import * as React from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyText from "./MyText";
import { Button, Image, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { Colors } from "../constants/colors";

export default function SignUp() {
  const { setAuthState, setEmail, setPassword, handleSignUp } =
    React.useContext(AuthContext);
  return (
    <React.Fragment>
      <Image
            source={require("../imgs/sign-up.png")}
            style={{ marginBottom: 20 }}
        />
      <MyText type="title">Sign Up</MyText>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20, marginTop: 20, marginHorizontal: 20, color: Colors.gray }}>It’s time to find your next room or roommate. Sign up.</Text>

      <MyInput label="First Name"/>
      <MyInput label="Last Name"/>
      <MyInput label="Email" onChangeText={setEmail} />
      <MyInput label="Password" onChangeText={setPassword} secureTextEntry />
      <MyInput label="Confirm Password" onChangeText={setPassword} secureTextEntry />
      <MyButton title="Sign Up" onPress={handleSignUp} />
      <Button 
        title="Go Back" 
        type="secondary"
        onPress={() => setAuthState("signIn")} 
      />
    </React.Fragment>
  );
}
