import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const handleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Open Drawer" onPress={handleDrawer} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
