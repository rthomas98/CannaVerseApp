import * as React from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyText from "./MyText";
import { AuthContext } from "../context/AuthContext";
import { StyleSheet } from "react-native";

export default function DefaultAuth() {
 const { setAuthState } = React.useContext(AuthContext);

 return (
   <React.Fragment>
     <MyText type="title" style={{ marginBottom: 35 }}>
       The new way of messaging
     </MyText>
     <MyButton title="Create account" onPress={() => setAuthState("signUp")} />
     <MyButton
       type="secondary"
       title="Login"
       onPress={() => setAuthState("signIn")}
     />
     <MyText
       type="caption"
       style={StyleSheet.outlinedButton}
     >
       -Or-
       
     </MyText>
     <MyButton
       title="Sign In With Google"
       type="secondary"
       // onPress={() => Auth.federatedSignIn()}
     />
     <MyButton
       title="Sign In With Apple"
       type="secondary"
       // onPress={() => Auth.federatedSignIn()}
     />
   </React.Fragment>
 );
}
