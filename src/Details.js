import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "./Services/API";
import { IMAGE_POSTER_URL } from "./config";
import Styles from "./Styles";
import Constants from "./Constants";
import { Entypo } from "@expo/vector-icons";

export default function Details(props) {
  let [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const id = props.route.params.movieId;
  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${id}`);
      // const json1 = await data;
      setDetails(data);
      setLoading(false);

      //console.log(data);
    };

    getDetails();
  }, []);

  const getGenre = () => {
    if (Object.keys(details).length === 0) {
    } else {
      //console.log(details);
      return details.genres.map((genre) => (
        <View style={Styles.genreContainer}>
          <Text style={Styles.genre}>{genre.name}</Text>
        </View>
      ));
    }

    //return details.genres.forEach((genre) =>
    //  <View style={Styles.genreContainer}>
    //  <Text style={Styles.genre}>{genre.name}</Text>
    //</View>

    //  );
  };

  //getGenre();

  // getGenre();
  // console.log(details.genres);
  /*if (details) {
    function getGenre() {
      return details.genres.map(
        (genre) =>
          // <View>
          // <Text>{genre.name}</Text>
          //</View>
          genre
      );
    }
    getGenre();
  } else {
    return null;
  }*/

  /*  if (details) {
    getGenre();
  } else {
    console.log("nothing");
  }
*/
  return (
    <View style={Styles.sectionBg}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Constants.textColor}
        ></ActivityIndicator>
      ) : null}
      <View>
        <Image
          source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
          style={Styles.detailsImage}
        ></Image>
      </View>
      <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
      {details.homepage ? (
        <View style={Styles.linkContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(details.homepage);
            }}
          >
            <Entypo name="link" size={24} color={Constants.textColor} />
          </TouchableOpacity>
        </View>
      ) : null}
      <Text style={Styles.heading}>OVERVIEW</Text>
      <Text style={Styles.overview}>{details.overview}</Text>
      <View style={Styles.detailsContainer}>
        <View>
          <Text style={Styles.heading}>BUDDGET</Text>
          <Text style={Styles.details}>{details.budget}</Text>
        </View>

        <View>
          <Text style={Styles.heading}>DURATION</Text>
          <Text style={Styles.details}>{details.runtime}min</Text>
        </View>

        <View>
          <Text style={Styles.heading}>RELEASE DATE</Text>
          <Text style={Styles.details}>{details.release_date}</Text>
        </View>
      </View>
      <Text style={Styles.heading}>GENRE</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {getGenre()}
      </View>
    </View>
  );
}
