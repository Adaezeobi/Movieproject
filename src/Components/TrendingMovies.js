import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../Services/API";
import Styles from "../Styles";
import Constants from "../Constants";
import { POSTER_IMAGE } from "../config";

export default function TrendingMovies(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET("/movie/top_rated");

      setMovies(data.results);
      setLoading(false);

      // console.log(data.results);
    };
    getMovies();
  }, []);
  return (
    <View style={Styles.sectionBg}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Constants.textColor}
        ></ActivityIndicator>
      ) : null}
      <Text style={Styles.trendingPeople}>Trending Movies</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={movies}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ marginHorizontal: 5 }}
              onPress={() => {
                props.navigation.navigation.navigate("Details", {
                  movieId: item.id,
                });
              }}
            >
              <Image
                source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
                style={Styles.posterImage}
              ></Image>
              <Text style={Styles.movieTitle}>{item.original_title}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
}
