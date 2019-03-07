/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent(`MainApp`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "MainApp"
      }
    }
  });
});