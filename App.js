import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import AboutScreen from "./screens/AboutScreen";
import Icons from "./components/Icons";

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#7fc7ce",
          drawerActiveTintColor: "white",
          drawerStyle: {
            paddingTop: 50,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => {
              return <Icons icon="home" />;
            },
          }}
        />
        <Drawer.Screen
          name="Account"
          component={AccountScreen}
          options={{
            drawerIcon: () => {
              return <Icons icon="person" />;
            },
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactUsScreen}
          options={{
            drawerIcon: () => {
              return <Icons icon="mail" />;
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: () => {
              return <Icons icon="information-circle" />;
            },
          }}
        />
        {/* <Drawer.Screen name="comp" drawerContent={DrawerComponent} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
