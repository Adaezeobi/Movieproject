import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Styles from "../Styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../Constants";
import { LinearGradient } from "expo-linear-gradient";

export default function Login(props) {
  return (
    <View style={Styles.registrationPageContainer}>
      <LinearGradient
        colors={[
          `${Constants.baseColor}`, //"rgba(63, 81, 181, 1)",
          "rgba(63, 81, 181, 1)",
          "rgba(0, 188, 212, 1)",
          "rgba(0, 158, 212, 1)",
        ]}
        locations={[0.1, 0.35, 0.6, 1]}
        // end={{ x: 0.1, y: 0.2 }}
      >
        <View style={Styles.searchSection}>
          <MaterialCommunityIcons
            name="email-open-outline"
            size={24}
            color={Constants.fadeColor}
            style={Styles.searchIcon}
          />
          <TextInput
            style={Styles.input}
            placeholder={"           Email"}
            // defaultValue={"      " }
          ></TextInput>
        </View>

        <View style={Styles.searchSection}>
          <Ionicons
            name="key"
            size={24}
            color={Constants.fadeColor}
            style={Styles.searchIcon}
          />
          <TextInput
            style={Styles.input}
            placeholder={"           Password"}
            // defaultValue={"      " }
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={Styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={Styles.searchSection}>
          <Pressable style={Styles.registerButton}>
            <Text style={Styles.registerButtonText}>LOGIN</Text>
          </Pressable>
        </View>

        <View style={{ height: 337 }}></View>
      </LinearGradient>
    </View>
  );
}
