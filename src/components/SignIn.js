import * as React from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyText from "./MyText";
import { Button, Image, Pressable } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function SignIn() {
  const { setAuthState, setEmail, setPassword, handleSignIn, isLoading } =
    React.useContext(AuthContext);

  return (
    <React.Fragment>
      <Image
            source={require("../imgs/stoney.png")}
            style={{ width: 155, height: 155, marginBottom: 20 }}
        />
      <MyText style={{ textAlign: 'center', }} type="title">Sign In</MyText>
      <MyInput label="Email" onChangeText={setEmail} />
      <MyInput label="Password" secureTextEntry onChangeText={setPassword} />
      <Pressable onPress={() => setAuthState("forgotPassword")}>
        <MyText
          style={{
            position: "absolute",
            right: 0,
            top: -15,
          }}
          type="caption"
        >
          Forgot Password?
        </MyText>
      </Pressable>

      <MyButton 
        title={isLoading ? "Loading..." : "Sign In"}
        disable={isLoading ? true : false}
        onPress={handleSignIn} 
        style={{ marginTop: 20 }}
      />
      
      <Button 
        title="Go Back" 
        onPress={() => setAuthState("default")} 
      /> 

    </React.Fragment>
  );
}
