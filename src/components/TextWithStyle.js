import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import DotComponent from "./DotComponent";
import { Icon } from "native-base";

export default class TextWithStyle extends React.Component {
  render() {
    return (
        <Text style={styles.description}>
        {
          this.props.text
        }
      </Text>
    
    );
  }
}

const styles = StyleSheet.create({
    description: {
        marginTop: 10,
        textAlign: "justify"
      },
});