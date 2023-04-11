import { View, ActivityIndicator, FlatList, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "../Constants";
import Loader from "./Loader";
import { GET } from "../Services/API";
import Styles from "../Styles";
import { IMAGE_POSTER_URL } from "../config";

export default function TrendingPeople() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET("/trending/person/week");
      setPeople(data.results);

      setLoading(false);
    };

    getPeople();
  }, []);

  return (
    <View style={Styles.sectionBg}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Constants.textColor}
        ></ActivityIndicator>
      ) : null}

      <View>
        <Text style={Styles.trendingPeople}>Trending People</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  source={{ uri: `${IMAGE_POSTER_URL}${item.profile_path}` }}
                  style={{ borderRadius: 100, height: 70, width: 70 }}
                ></Image>
                <Text style={Styles.trendingPeopleName}>{item.name}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}
