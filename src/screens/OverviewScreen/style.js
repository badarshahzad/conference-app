import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  cardType: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: "#2C5F2DFF",
    borderBottomWidth: 0,
    shadowColor: "#FFE77AFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flex: 1,
    padding: 20,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#FFE77AFF"
    // backgroundColor: "#2C5F2DFF",
    // opacity: 0.8
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#2C5F2DFF"
  },
  mainTitle: {
    fontSize: 21,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#2C5F2DFF"
  },
  description: {
    marginTop: 10,
    textAlign: "justify"
  },
  info: {
    flex: 1,
    marginTop: 7,
    alignItems: "flex-start",
    flexDirection: "row"
  },
  author: {
    flex: 1,
    marginTop: 20,
    alignItems: "flex-start",
    flexDirection: "row",
    paddingBottom: 35
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 13
  },
  name: {
    fontWeight: "bold"
  },
  banner: {
    flex: 1,
    maxHeight: 300,
    height: 300,
    width
  },
  link: {
    color: "#255899"
  }
});
