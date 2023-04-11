import { View, Text } from "react-native";
import React from "react";
import Constants from "../Constants";
import { useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Constants.textColor}
        ></ActivityIndicator>
      ) : null}
    </View>
  );
}
