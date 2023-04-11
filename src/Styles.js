import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { Dimensions, StyleSheet } from "react-native";
import Constants from "./Constants";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    // height: deviceHeight,
  },

  trendingPeople: {
    color: Constants.fadeColor,
    fontSize: 19,
    margin: 10,
  },

  trendingPeopleName: {
    color: Constants.textColor,
    width: 70,
    textAlign: "center",
    marginTop: 10,
  },

  posterImage: {
    height: 220,
    width: 150,
    borderRadius: 10,
  },

  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
  },

  detailsImage: {
    width: deviceWidth,
    height: 200,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: Constants.textColor,
    textAlign: "center",
    marginTop: -40,
  },

  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    textAlign: "justify",
    fontSize: 16,
  },

  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  genre: {
    color: Constants.textColor,
    fontSize: 16,
  },

  heading: {
    color: Constants.fadeColor,
    // marginBottom: 5,
    color: Constants.fadeColor,
    fontSize: 19,
    margin: 10,
  },

  signUpText: {
    color: Constants.fadeColor,
    marginVertical: 20,
    marginLeft: 20,
  },

  textInput: {
    height: 40,
    width: 350,
    borderColor: Constants.fadeColor,
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
  },

  searchSection: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#fff",
    // borderColor: "red",
    //borderWidth: 1,
    marginTop: 50,
    marginBottom: 20,
  },
  searchIcon: {
    //padding: 10,
    position: "relative",
    zIndex: 1,
    marginRight: 300,
    // flex: ,
  },
  input: {
    flex: 1,
    // paddingTop: 10,
    //paddingRight: 10,
    //paddingBottom: 10,
    //paddingLeft: 0,
    position: "absolute",
    height: 40,
    width: 350,
    borderColor: Constants.fadeColor,
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 15,
    marginVertical: 1,

    backgroundColor: "#fff",
    color: "#424242",
  },

  registrationPageContainer: {
    height: 630,
  },

  registerButton: {
    height: 40,
    width: 350,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Constants.fadeColor,
    borderWidth: 2,
    justifyContent: "center",
    // borderColor: "transparent",
  },

  registerButtonText: {
    textAlign: "center",
    color: Constants.textColor,
  },

  loginContainer: {
    flexDirection: "row",

    justifyContent: "center",
  },
  loginLink: {
    color: Constants.fadeColor,
    textAlign: "center",
    marginTop: 100,
  },
  login: {
    color: Constants.textColor,

    textAlign: "center",
    marginTop: 100,
  },

  forgotPassword: {
    color: Constants.textColor,
    textAlign: "right",
    marginRight: 30,
    marginTop: 20,
  },
});
export default Styles;
