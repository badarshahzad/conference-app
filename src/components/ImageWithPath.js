import React, { Component } from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import DotComponent from "./DotComponent";
import { Icon } from "native-base";

export default class ImageWithPath extends React.Component {
  render() {
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"center",marginTop:8, marginBottom:8}}>
        <Image source={this.props.path} />
        style={{ width: 330,height: 330,borderRadius: 4,resizeMode: 'contain'}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({});
