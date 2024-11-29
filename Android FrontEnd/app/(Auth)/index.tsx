import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get("window");

const Login = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome Back!</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          onChangeText={(e)=>console.log(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.navigate("/Signup")}>
          <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    width: width * 0.9,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
  switchText: {
    color: "#4a90e2",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Login;
