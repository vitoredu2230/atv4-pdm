import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Fullscreen from "./components/Fullscreen";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState<string>("");
  const [accessAuthorized, setAccessAuthorized] = useState<boolean>(false);

  return (
    <Fullscreen>
      <Text style={styles.title}>
        Welcome to Cidade dos Lagos Tourist Center!
      </Text>
      <Text style={styles.subTitle}>Visitor Identification</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Type your fullname here!"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.requestButton}>
        <Text>Request Access</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Fullscreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 410,
    color: "white",
    fontSize: 12,
    height: "10%",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "cornflowerblue",
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
    padding: 30,
  },
  input: {
    width: "55%",
    marginHorizontal: "auto",
    height: 60,
    borderWidth: 3,
    borderColor: "cornflowerblue",
    borderRadius: 5,
  },
  requestButton: {
    backgroundColor: "blue",
    width: "10%",
  },
});
