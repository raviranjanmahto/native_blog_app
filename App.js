import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={({ navigation }) => ({
              title: "Blog",
              // Add a placeholder button without the `onPress` to avoid flicker
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <EvilIcons name='plus' size={42} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name='Show'
            component={ShowScreen}
            options={({ navigation, route }) => ({
              title: "Show",
              // Add a placeholder button without the `onPress` to avoid flicker
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <FontAwesome name='edit' size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name='Create'
            component={CreateScreen}
            options={{ title: "Create" }}
          />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
