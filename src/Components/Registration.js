import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Styles from "../Styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../Constants";
import { LinearGradient } from "expo-linear-gradient";

export default function Registration(props) {
  return (
    <View style={Styles.registrationPageContainer}>
      <LinearGradient
        /* colors={[
          "rgba(63, 81, 181, 1)",
          "rgba(0, 188, 212, 1)",
          "rgba(0, 158, 212, 1)",
        ]}
        locations={[0.35, 0.7, 0.95]}*/
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
          <AntDesign
            name="user"
            size={24}
            color={Constants.fadeColor}
            style={Styles.searchIcon}
          />
          <TextInput
            style={Styles.input}
            placeholder={"           Fullname"}
            // defaultValue={"      " }
          ></TextInput>
        </View>

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
          <FontAwesome
            name="phone"
            size={24}
            color={Constants.fadeColor}
            style={Styles.searchIcon}
          />
          <TextInput
            style={Styles.input}
            placeholder={"           Phone"}
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

        <View style={Styles.searchSection}>
          <Pressable style={Styles.registerButton}>
            <Text style={Styles.registerButtonText}>REGISTER</Text>
          </Pressable>
        </View>
        <View style={Styles.loginContainer}>
          <Text style={Styles.loginLink}> Already a member? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={Styles.login}> Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 150 }}></View>
      </LinearGradient>
    </View>
  );
}
