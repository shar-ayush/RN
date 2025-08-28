import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Refs for smooth focus
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmRef = useRef<TextInput>(null);

  const handleLogin = () => {
    // ✅ 1. Check empty fields
    if (!form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }

    // ✅ 2. Check email format (basic regex)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email");
      return;
    }

    // ✅ 3. Check password length
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // ✅ 4. Check if passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // ✅ Passed all checks
    setError("");
    Alert.alert("Successfully Logged in");

    // ✅ Reset form
    setForm({
      email: "",
      password: "",
      confirmPassword: "",
    });

    // ✅ Reset focus to email
    emailRef.current?.focus();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign in to my App</Text>
        </View>

        <View style={styles.form}>
          {/* Email */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              ref={emailRef}
              style={styles.inputControl}
              autoCorrect={false}
              placeholder="Enter email address"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </View>

          {/* Password */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              ref={passwordRef}
              secureTextEntry
              style={styles.inputControl}
              autoCorrect={false}
              placeholder="Enter password"
              placeholderTextColor="#6b7280"
              autoCapitalize="none"
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
              returnKeyType="next"
              onSubmitEditing={() => confirmRef.current?.focus()}
            />
          </View>

          {/* Confirm Password */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              ref={confirmRef}
              secureTextEntry
              style={styles.inputControl}
              autoCorrect={false}
              placeholder="Confirm password"
              placeholderTextColor="#6b7280"
              autoCapitalize="none"
              value={form.confirmPassword}
              onChangeText={(confirmPassword) =>
                setForm({ ...form, confirmPassword })
              }
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />
          </View>

          {/* Error Message */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Button */}
          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {},
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  form: {},
  input: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 22,
    fontWeight: "500",
  },
  inputControl: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 7,
    height: 50,
    marginTop: 10,
    fontSize: 17,
  },
  formAction: {
    marginVertical: 25,
  },
  button: {
    backgroundColor: "#075eec",
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
  },
});
