import { AppRegistry } from "react-native";
import { Provider } from "react-native-paper";
import { expo } from "app.json";
import App from "~/App";

export default function Main() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);
