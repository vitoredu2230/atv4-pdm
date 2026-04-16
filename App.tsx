import { StatusBar } from "expo-status-bar";
import {
  Image,
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

  if (accessAuthorized) {
    return (
      <Fullscreen center borderWidth={1}>
        <Text style={styles.authorizedTitle}>Access Granted!</Text>
        <Text style={styles.authorizedSubTitle}>Welcome, {name}!</Text>
        <Image
          style={styles.verifiedIcon}
          source={require("./assets/verified-account.png")}
        />
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => {
            setAccessAuthorized(false);
          }}
          disabled={name.length == 0}
        >
          <Text style={styles.textButton}>Log out</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </Fullscreen>
    );
  }
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
        placeholder="Type your full name here!"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity
        style={[
          styles.requestButton,
          name.length == 0 && styles.disabledButton,
        ]}
        activeOpacity={0.8}
        onPress={() => {
          setAccessAuthorized(true);
        }}
        disabled={name.length == 0}
      >
        <Text style={styles.textButton}>Request Access</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resetButton}
        activeOpacity={0.8}
        onPress={() => {
          setName("");
        }}
      >
        <Text style={styles.textButton}>Reset</Text>
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
  authorizedFullscreen: {
    borderWidth: 1,
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
  authorizedTitle: {
    width: 410,
    fontSize: 30,
    height: "10%",
    justifyContent: "flex-end",
    textAlign: "center",
    textAlignVertical: "bottom",
    textTransform: "uppercase",
  },
  verifiedIcon: {
    width: 150,
    height: 150,
  },
  subTitle: {
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
    padding: 30,
  },
  authorizedSubTitle: {
    fontSize: 50,
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
    backgroundColor: "cornflowerblue",
    paddingVertical: 18,
    paddingHorizontal: 32,
    margin: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginTop: 50,
  },
  logoutButton: {
    backgroundColor: "crimson",
    paddingVertical: 18,
    paddingHorizontal: 32,
    margin: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginTop: 50,
  },
  disabledButton: {
    backgroundColor: "#808080",
    shadowOpacity: 0,
    elevation: 0,
  },
  resetButton: {
    backgroundColor: "darkslategrey",
    paddingVertical: 18,
    paddingHorizontal: 32,
    margin: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginTop: 50,
  },
  textButton: {
    textAlign: "center",
    fontSize: 45,
    color: "white",
    textTransform: "uppercase",
  },
});
