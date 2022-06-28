import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons , AntDesign ,MaterialCommunityIcons} from "react-native-vector-icons";
import { Button, TouchableOpacity,ActivityIndicator } from "react-native";
import LoginPage from "./assets/componant/LoginPage";

export default function App() {
  const [loadingStatus, setLoadingStatus] = useState(false)

  let obj = {
    name:"Piyush"
  }

  let arr = ["raj","mayur","prince"]
  return (
    <>
      <View style={styles.container}>
        <LoginPage />
      {/* <View style={styles.bg}>
        <Text style={styles.font}>{obj?.name}</Text>
        <TouchableOpacity>
          <Ionicons style={styles.icon} name="home" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign style={styles.icon} name="contacts" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign style={styles.icon} name="setting" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.icon}
            name="wifi-settings"
            size={40}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "red", backgroundColor: "yellow" }}>
        That is my first project in native
      </Text>
      {arr.map((item, i) => {
        return (
          <Text key={i} style={{ marginLeft: "3%" }}>
            {item}
          </Text>
        );
      })}
      <View
        style={{
          height: "50%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loadingStatus && <ActivityIndicator size={70} color="black" />}
        <View style={{ flexDirection: "row", marginTop: "5%" }}>
          {
            !loadingStatus ?
          <TouchableOpacity
            style={{ marginRight: 10, borderColor: "black", borderWidth: 1 }}
          >
            <Button title="Start" onPress={() => setLoadingStatus(true)}></Button>
              </TouchableOpacity>
              :
          <TouchableOpacity style={{ borderColor: "black", borderWidth: 1 }}>
                <Button title="Stop" onPress={() => setLoadingStatus(false)}></Button>
          </TouchableOpacity>
          }
        </View>
      </View>
      <StatusBar style="auto" /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  font: {
    color: "blue"
  },
  bg: {
    backgroundColor: "green",
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop:"7%"
  },
  icon: {
    color: "white",
    padding: "5%"
  }
});
