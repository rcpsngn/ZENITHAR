import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import API from "../api/api";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await API.post("auth/register/", {
        username,
        email,
        password
      });
      alert("Registered! Please login.");
      navigation.navigate("Login");
    } catch {
      alert("Register failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Register</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={register} />
    </View>
  );
}
