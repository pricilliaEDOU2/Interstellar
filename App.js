import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.fristpart}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.marginbody}>
        <View>
          <Text style={[styles.textwhite, styles.title]}>Interstellar</Text>
          <View style={[styles.secondpart, styles.flexrow]}>
            <Text style={styles.textGrey}>2014</Text>
            <Text style={styles.textGrey}>PG-13</Text>
            <Text style={styles.textGrey}>2h49min</Text>
            <Text style={styles.textGrey}>Adventure,Drama,Sci-Fi</Text>
          </View>
          <View style={styles.flexrow}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.imgfilm}
            />
            <View style={styles.col2}>
              <Text style={styles.textwhite}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableHighlight>
                <Text style={[styles.textwhite, styles.button]}>
                  + ADD TO WATCHLIST
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={[styles.flexrow, styles.espace]}>
            <View style={styles.heightbloc}>
              <Entypo name="star" size={24} color="yellow" />
              <Text style={styles.textwhite}>
                <Text style={styles.textbold}>8,6</Text>
                <Text>/10</Text>
              </Text>
            </View>
            <View style={styles.heightbloc}>
              <Entypo name="star-outlined" size={24} color="white" />
              <Text style={styles.textwhite}>RATE THIS</Text>
            </View>
            <View style={styles.heightbloc}>
              <Text style={[styles.textwhite, styles.bgcgreen]}>74</Text>
              <Text style={styles.textwhite}>Metascore</Text>
            </View>
          </View>
          <View style={styles.separatebloc}></View>
          <View style={[styles.flexrow, styles.textbold, styles.position]}>
            <Text style={[styles.textwhite, styles.size]}>Top Billed Cast</Text>
            <Text style={styles.textblue}>SEE ALL</Text>
          </View>
          <View style={styles.flexrow}>
            <View>
              <Image
                source={require("./assets/matthew.jpg")}
                style={styles.portrait}
              />
              <View style={styles.infoactors}>
                <Text numberOfLines={1} style={styles.textwhite}>
                  Mathew McConnord
                </Text>
                <Text style={styles.textGrey}>Cooper</Text>
              </View>
            </View>
            <ScrollView horizontal>
              <View>
                <Image
                  source={require("./assets/anne.jpg")}
                  style={styles.portrait}
                />
                <View style={styles.infoactors}>
                  <Text numberOfLines={1} style={styles.textwhite}>
                    Anne Hathaway
                  </Text>
                  <Text style={styles.textGrey}>Brand</Text>
                </View>
              </View>
              <View>
                <Image
                  source={require("./assets/jessica.jpg")}
                  style={styles.portrait}
                />
                <View style={styles.infoactors}>
                  <Text numberOfLines={1} style={styles.textwhite}>
                    Jessica ch
                  </Text>
                  <Text style={styles.textGrey}>Murph</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.marginpart}>
        <Text style={styles.textwhite}>Director</Text>
        <Text style={styles.textGrey}>Christopher Nolan</Text>
      </View>
      <View style={styles.marginpart}>
        <Text style={styles.textwhite}>Writers</Text>
        <Text style={styles.textGrey}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1D1D1D",
  },
  marginbody: {
    marginLeft: 20,
  },
  textwhite: { color: "white" },
  fristpart: {
    backgroundColor: "#393939",
    height: 60,
    justifyContent: "center",
  },
  logo: { height: 30, width: 60, marginLeft: 20 },
  title: { fontSize: 32, marginTop: 15 },

  secondpart: {
    borderColor: "#212121",
    marginTop: 15,
    marginBottom: 20,
  },
  textGrey: { color: "grey" },
  flexrow: { flexDirection: "row", gap: 10 },
  imgfilm: { width: 100, height: 150 },
  button: { backgroundColor: "#0277BD", padding: 10, marginTop: 20 },
  col2: { flex: 1, paddingHorizontal: 10 },
  textbold: { fontWeight: "bold" },
  espace: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bgcgreen: {
    backgroundColor: "#66C554",
    width: 25,
    fontWeight: "bold",
    padding: 2,
    textAlign: "center",
  },
  heightbloc: { gap: 5, alignItems: "center" },
  separatebloc: {
    backgroundColor: "#181818",
    height: 20,
    marginTop: 20,
    marginLeft: 0,
  },
  size: { fontSize: 20 },

  textblue: { color: "#146287", paddingRight: 10 },
  position: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  portrait: {
    width: 150,
    height: 220,
    marginTop: 20,
  },
  infoactors: {
    backgroundColor: "#2A2A2A",
    padding: 15,
    height: 60,
    width: 150,
  },
  marginpart: { margin: 20 },
});
