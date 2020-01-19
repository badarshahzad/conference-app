import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import DotComponent from "./DotComponent";
import { Icon } from "native-base";

export default class RadioBtPassage extends React.Component {
  render() {
    return (
      <View style={{ padding: 8, flexDirection: "row", alignItems: "center" }}>
        <DotComponent />
        <Text style={{ flex: 1, paddingLeft: 5 }}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
