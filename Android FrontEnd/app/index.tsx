import { Text, View } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <Link
      href={"/(tab)"}
      style={{
        backgroundColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
            color: "white",
            textAlign: "center",
          }}
        >
          Tech-Neoxys{"\n"}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: "white",
            textAlign: "center",
          }}
        >
          Tap Anywhere to Continue
        </Text>
      </View>
    </Link>
  );
};

export default Index;
