import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import API from "../api/api";

export default function LoginScreen({ navigation, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await API.post("auth/login/", {
        username,
        password
      });
      setToken(res.data.access);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
