import React, { useEffect } from "react";
import { View, Text } from "react-native";
import DiscoverMovies from "./Components/DiscoverMovies";
import TrendingMovies from "./Components/TrendingMovies";
import TrendingPeople from "./Components/TrendingPeople";
import Constants from "./Constants";
import Styles from "./Styles";

const Home = (props) => {
  return (
    <View>
      <DiscoverMovies></DiscoverMovies>
      <TrendingPeople></TrendingPeople>
      <TrendingMovies navigation={props}></TrendingMovies>
    </View>
  );
};

export default Home;
