import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Amplify } from 'aws-amplify';
import { useEffect } from "react";
import config from "./config";

export default function App() {
  //Amplify configuration
  Amplify.configure({
    Auth: {
      identityPoolId: config.s3.identityPoolId,
      region: config.aws.region,
      userPoolId: config.auth.userPoolId,
      userPoolWebClientId: config.auth.userPoolWebClientId
    },
    oauth: {
      domain: config.auth.domain,
      scope: ["email"],
      responseType: "code",
    },
  });
  
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}