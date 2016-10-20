import * as React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import Provider from "./redux-helper/Provider";

class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Provider>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.tsx
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{"\n"}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as React.ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as React.ViewStyle,
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as React.ViewStyle,
});

export default App;
