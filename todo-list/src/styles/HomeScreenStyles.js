import { StyleSheet, Platform } from "react-native";
import {
  STATUS_BAR_HEIGHT,
  PRIMARY_COLOR,
  TEXT_COLOR_DARK,
  BACKGROUND_COLOR_LIGHT,
  TEXT_COLOR_DISABLED,
} from "../constants/styles";

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
    paddingTop: STATUS_BAR_HEIGHT,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
    color: TEXT_COLOR_DARK,
  },

  loader,
  listEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    marginHorizontal: 15,
  },
  emptyText: {
    fontSize: 16,
    color: TEXT_COLOR_DISABLED,
  },
  addButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 60,
    width: 60,
    right: 30,
    elevation: 6,
  },
});
