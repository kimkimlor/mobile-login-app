import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const alerter = () => {
    if (username !== "" && password === "admin#1234") {
      Alert.alert("info:", "berhasil login");
    } else {
      Alert.alert("info:", "password salah / username kosong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>login</Text>
      <Text>username:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="username"
        onChangeText={(newText) => setUsername(newText)}
        value={username}
      />
      <Text>password:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(newText) => setPassword(newText)}
        value={password}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 10,
          alignItems: "center",
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => alerter()}
      >
        <Text style={{ color: "white" }}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 150,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
