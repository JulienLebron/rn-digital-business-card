import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "./ProjectCard";

export default function App() {
  const links = {
    github: "SavinVadim1312",
    email: "vadim@notjust.dev",
    x: "VadimNotJustDev",
  };
  const contactMe = () => {
    console.warn("contact me pressed");
    Linking.openURL("mailto:vadim@notjust.dev");
  };
  const renderIcons = () => {
    return (
      <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
        {links.github && <FontAwesome6 name="github" size={24} color="black" />}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
        {links.email && <FontAwesome6 name="at" size={24} color="black" />}
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={require("./assets/vadim.png")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Vadim Savin
            </Text>
            <Text>Founder of notJust.dev</Text>
            {renderIcons()}
            <Button title="Contact me" onPress={contactMe} />
            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                image={require("./assets/projects/project1.jpeg")}
                name="Apple Cards"
              />
              <ProjectCard
                image={require("./assets/projects/project2.jpeg")}
                name="Trello"
              />
              <ProjectCard
                image={require("./assets/projects/project3.jpeg")}
                name="Flappy bird"
              />
              <ProjectCard
                image={require("./assets/projects/project4.jpeg")}
                name="Todo app"
              />
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
