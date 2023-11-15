import * as React from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Root from "./src/navigation/Root";
import Splash from "./src/screens/Splash";
import AuthScreen from "./src/screens/Auth";
import OnboardingScreen from "./src/screens/OnboardingScreen"; // Import OnboardingScreen
import AsyncStorage from '@react-native-async-storage/async-storage';

Amplify.configure(awsconfig);

export default function App() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null); // New state for onboarding

  React.useEffect(() => {
    AsyncStorage.getItem('onboardingComplete').then(value => {
      if (value === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
      setIsLoading(false); // Move setIsLoading here to ensure async operation is complete
    });

    const listener = (data) => {
      switch (data.payload.event) {
        case "signIn":
          setUser(data.payload.data.attributes);
          break;
        case "signOut":
          setUser(null);
          break;
        default:
          break;
      }
    };

    Hub.listen("auth", listener);

    // Unsubscribe from the listener when component unmounts
    return () => Hub.remove("auth", listener);
  }, []);

  if (isLoading) {
    return <Splash setUser={setUser} setIsLoading={setIsLoading} />;
  }

  if (isFirstLaunch) {
    return <OnboardingScreen onFinished={() => setIsFirstLaunch(false)} />;
  }

  return user ? <Root user={user} /> : <AuthScreen />;
}