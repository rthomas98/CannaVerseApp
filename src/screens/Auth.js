import * as React from "react";
import { View } from "react-native";
import SignIn from "../components/SignIn";
import ForgotPassword from "../components/ForgotPassword";
import ConfirmForgotPassword from "../components/ConfirmForgotPassword";
import SignUp from "../components/SignUp";
import ConfirmSignUp from "../components/ConfirmSignUp";
import { AuthProvider, AuthContext } from "../context/AuthContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DefaultAuth from "../components/DefaultAuth";

export default function Wrapper() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

function Auth() {
  const { authState } = React.useContext(AuthContext);
  console.log("authState", authState);
  return (
    <KeyboardAwareScrollView
      style={{ 
       }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 17,
      }}
    >
      {authState === "default" && <DefaultAuth />}
      {authState === "signIn" && <SignIn />}
      {authState === "signUp" && <SignUp />}
      {authState === "confirmSignUp" && <ConfirmSignUp />}
      {authState === "forgotPassword" && <ForgotPassword />}
      {authState === "confirmForgotPassword" && <ConfirmForgotPassword />}
    </KeyboardAwareScrollView>
  );
}
